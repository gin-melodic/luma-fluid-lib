import {XShaderBase} from "./base.ts";
import {XUniformTexture} from "../XUniform.ts";
import {XAttribute} from "../XAttribute.ts";

class XParticlesShaderBase extends XShaderBase {

  particleData!: XUniformTexture
  particleUV!: XAttribute

  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    super(gl);
  }

  createProperties() {
    super.createProperties();
    const texture = new XUniformTexture(this.gl, 'particleData', null, false)
    this.particleData = texture
    this._uniforms.push(texture)

    const uv = new XAttribute('particleUV', 0 ,2)
    this.particleUV = uv
    this._attributes.push(uv)
    this._aStride += 8
  }

  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform sampler2D particleData;
attribute vec2 particleUV;
varying vec4 color;

void main() {
    vec2 p = texture2D(particleData, particleUV).xy;
    vec2 v = texture2D(particleData, particleUV).zw;
    gl_PointSize = 1.0;
    gl_Position = vec4(p, 0.0, 1.0);
    color = vec4(1.0, 1.0, 1.0, 1.0);
}`;
    this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

varying vec4 color;
void main() {
    gl_FragColor = vec4(color);
}`
  }
}

export class XParticlesShader extends XParticlesShaderBase {
  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    super(gl);
    this.createProperties();
  }

  createProperties() {
    super.createProperties();
  }

  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform sampler2D particleData;
attribute vec2 particleUV;
varying vec4 color;

void main() {
    vec2 p = texture2D(particleData, particleUV).xy;
    vec2 v = texture2D(particleData, particleUV).zw;
    gl_PointSize = 3.0;
    gl_Position = vec4(p, 0.0, 1.0);
    float speed = length(v);
    float x = clamp(speed * 4.0, 0., 1.);
    color.rgb = (
        mix(vec3(40.4, 0.0, 35.0) / 300.0, vec3(0.2, 47.8, 100) / 100.0, x)
        + (vec3(63.1, 92.5, 100) / 100.) * x*x*x * .1
    ) + vec3(0.5);
    color.a = 1.0;
}`;
    this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

varying vec4 color;
void main() {
    gl_FragColor = vec4(color);
}`;
  }
}
