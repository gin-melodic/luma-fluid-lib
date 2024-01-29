import {XShaderBase} from "./base.ts";
import {XUniformArray, XUniformTexture} from "../XUniform.ts";
import {XAttribute} from "../XAttribute.ts";

export type TypeShaderPart = {
  varyingDeclarations: string[],
  varyingValues: string[],
  textureSamples: string[],
}
export class XPartShader extends XShaderBase {
  direction;
  kernel;
  shaderParts: TypeShaderPart;
  invResolution!: XUniformArray;
  texture!: XUniformTexture;
  vertexPosition!: XAttribute;

  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, direction: Float32Array, kernel: number) {
    super(gl);
    this.gl = gl;
    this.direction = direction;
    this.kernel = kernel;
    this.shaderParts = this.generateShaderParts()
    this.createProperties()
  }

  generateShaderParts() {
    const bestKernel = this.nearestBestKernel(this.kernel)
    const half = (bestKernel - 1) / 2
    const n: number[] = []
    const r: number[] = []
    let index = 0
    for (let a = 0; a < bestKernel; a++) {
      const o = a
      const weight = this.gaussianWeight(o / (bestKernel - 1) * 2 - 1);
      n[o] = o - half;
      r[o] = weight;
      index += weight;
    }
    const rLen = r.length
    for (let i = 0; i < rLen; i++) {
      r[i] /= index;
    }
    const dWArr: number[] = [], dOArr: number[] = [], dArr: {o: number, w: number}[] = []
    for (let i = 0; i <= half; i+=2) {
      const minVal = 0 | Math.min(i + 1, Math.floor(half));
      if (i === minVal) {
        dArr.push({
          o: n[i],
          w: r[i]
        })
      } else {
        const p = r[i] + r[minVal] * (minVal == half ? .5 : 1);
        const f = n[i] + 1 / (1 + r[i] / r[minVal]);
        if (0 === f) {
          dArr.push({
            o: n[i],
            w: r[i],
          });
          dArr.push({
            o: n[i + 1],
            w: r[i + 1]
          });
        } else {
          dArr.push({
            o: f,
            w: p
          });
          dArr.push({
            o: -f,
            w: p
          })
        }
      }
    }
    for (let i = 0; i < dArr.length; i++) {
      dOArr[i] = dArr[i].o;
      dWArr[i] = dArr[i].w;
    }
    const declarations: string[] = []
    const dOArrLen = dOArr.length;
    for (let i = 0; i < dOArrLen; i++) {
      declarations.push("varying vec2 sampleCoord" + i++ + ";");
    }
    const varyingValues:string[] = [];
    for (let i = 0; i < dOArrLen; i++) {
      varyingValues.push("sampleCoord" + i + " = texelCoord + vec2(" + this.glslFloat(dOArr[i] * this.direction[0]) + ", " + this.glslFloat(dOArr[i] * this.direction[1]) + ") * invResolution;");
    }
    const textureSamples = [];
    for (let i = 0; i < dOArrLen; i++) {
      textureSamples.push("blend += texture2D(texture, sampleCoord" + i + ") * " + this.glslFloat(dWArr[i]) + ";");
    }
    return {
      varyingDeclarations: declarations,
      varyingValues: varyingValues,
      textureSamples: textureSamples
    }
  }
  nearestBestKernel(kernel: number) {
    let t
    const n = Math.round(kernel)
    return n % 2 != 0 && Math.floor(n / 2) % 2 == 0 && n > 0 ? 0 | Math.max(n, 3) : (t = n - 1) % 2 != 0 &&
    Math.floor(t / 2) % 2 == 0 && t > 0 || (t = n + 1) % 2 != 0 && Math.floor(t / 2) % 2 == 0 && t > 0 ||
    (t = n - 2) % 2 != 0 && Math.floor(t / 2) % 2 == 0 && t > 0 || (t = n + 2) % 2 != 0 &&
    Math.floor(t / 2) % 2 == 0 && t > 0 ? 0 | Math.max(t, 3) : 0 | Math.max(n, 3)
  }

  gaussianWeight(e: number) {
    return 1 / (.3333333333333333 * Math.sqrt(2 * Math.PI)) * Math.exp(-e * e / .2222222222222222)
  }

  glslFloat(e: number) {
    let t = null === e ? "null" : "" + e;
    return -1 === t.indexOf(".") && (t += "."), t
  }
  createProperties() {
    super.createProperties();
    const invResolution = new XUniformArray(this.gl, "invResolution", null);
    this.invResolution = invResolution;
    this._uniforms.push(invResolution);
    const texture = new XUniformTexture(this.gl, "texture", null, false);
    this.texture = texture;
    this._uniforms.push(texture);
    const vertexPosition = new XAttribute("vertexPosition", 0, 2);
    this.vertexPosition = vertexPosition;
    this._attributes.push(vertexPosition);
    this._aStride += 8;
  }
  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif
 
attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;


varying vec2 p;

void main() {
    texelCoord = vertexPosition;
    
    vL = texelCoord - vec2(invResolution.x,0);
    vR = texelCoord + vec2(invResolution.x,0);
    vB = texelCoord - vec2(0,invResolution.y);
    vT = texelCoord + vec2(0,invResolution.y);
    
    vec2 clipSpace = 2.0*texelCoord - 1.0;    
    
    p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);

    gl_Position = vec4(clipSpace, 0.0, 1.0 );    
}
`;
    this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
    return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
    return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )
`;
  }
}
