import {XSurfaceShaderBaseBase} from "./surface.ts";
import {XUniformFloat, XUniformTexture} from "../XUniform.ts";

export class XAdvectShader extends XSurfaceShaderBaseBase {
  velocity!: XUniformTexture
  target!: XUniformTexture
  dt!: XUniformFloat
  rdx!: XUniformFloat
  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    super(gl)
    this.createProperties()
  }

  createProperties() {
    super.createProperties();
    const velocity = new XUniformTexture(this.gl, "velocity", null, false);
    this.velocity = velocity;
    this._uniforms.push(velocity);

    const target = new XUniformTexture(this.gl, "target", null, false);
    this.target = target;
    this._uniforms.push(target);

    const dt = new XUniformFloat(this.gl, "dt", null);
    this.dt = dt;
    this._uniforms.push(dt);

    const rdx = new XUniformFloat(this.gl, "rdx", null);
    this.rdx = rdx;
    this._uniforms.push(rdx);
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

uniform sampler2D velocity;
uniform sampler2D target;
uniform float dt;
uniform float rdx; 

varying vec2 texelCoord;
varying vec2 p;

void main(void){
  
  vec2 tracedPos = p - dt * rdx * texture2D(velocity, texelCoord).xy;

  gl_FragColor = texture2D(target, simToTexelSpace(tracedPos));
}
`;
  }
}
