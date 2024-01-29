import {XSurfaceShaderBaseBase} from "./surface.ts";
import {XUniformFloat, XUniformTexture} from "../XUniform.ts";

export class XPressureSolveShader extends XSurfaceShaderBaseBase {
  pressure!: XUniformTexture
  divergence!: XUniformTexture
  alpha!: XUniformFloat
  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    super(gl)
    this.createProperties();
  }

  createProperties() {
    super.createProperties();
    const pressure = new XUniformTexture(this.gl, "pressure", null, false);
    this.pressure = pressure;
    this._uniforms.push(pressure);

    const divergence = new XUniformTexture(this.gl, "divergence", null, false);
    this.divergence = divergence;
    this._uniforms.push(divergence);

    const alpha = new XUniformFloat(this.gl, "alpha", null);
    this.alpha = alpha;
    this._uniforms.push(alpha);
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

uniform sampler2D pressure;
uniform sampler2D divergence;
uniform float alpha;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

void main(void){
      
  
  float L = samplePressure(pressure, vL);
  float R = samplePressure(pressure, vR);
  float B = samplePressure(pressure, vB);
  float T = samplePressure(pressure, vT);

  float bC = texture2D(divergence, texelCoord).x;

  gl_FragColor = vec4( (L + R + B + T + alpha * bC) * .25, 0, 0, 1 ); 
}
`;
  }
}
