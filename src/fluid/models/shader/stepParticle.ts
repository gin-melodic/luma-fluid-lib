import {XConditionsShaderBase} from "./conditionsShader.ts";
import {XUniformArray, XUniformFloat, XUniformTexture} from "../XUniform.ts";

class XStepParticlesShaderBase extends XConditionsShaderBase {
  dt!: XUniformFloat
  particleData!: XUniformTexture
  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    super(gl);
  }

  createProperties() {
    super.createProperties();
    const dt = new XUniformFloat(this.gl, "dt", null);
    this.dt = dt;
    this._uniforms.push(dt);
    const particleData = new XUniformTexture(this.gl, "particleData", null, false);
    this.particleData = particleData;
    this._uniforms.push(particleData);
  }

  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
    varying vec2 texelCoord;
    void main() {
        texelCoord = vertexPosition;
        gl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );
    }
`;
    this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

varying vec2 texelCoord;

uniform float dt;
    uniform sampler2D particleData;
`;
  }
}

export class XStepParticlesShader extends XStepParticlesShaderBase {
  dragCoefficient!: XUniformFloat;
  flowScale!: XUniformArray;
  flowVelocityField!: XUniformTexture;

  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    super(gl);
    this.createProperties();
  }

  createProperties() {
    super.createProperties();
    const dragCoefficient = new XUniformFloat(this.gl, "dragCoefficient", null);
    this.dragCoefficient = dragCoefficient;
    this._uniforms.push(dragCoefficient);
    const flowScale = new XUniformArray(this.gl, "flowScale", null);
    this.flowScale = flowScale;
    this._uniforms.push(flowScale);
    const flowVelocityField = new XUniformTexture(this.gl, "flowVelocityField", null, false);
    this.flowVelocityField = flowVelocityField;
    this._uniforms.push(flowVelocityField);
  }

  initSources() {
    this._vertSource = "\n#ifdef GL_ES\nprecision highp float;\nprecision highp sampler2D;\n#endif\n\nattribute vec2 vertexPosition;\n	varying vec2 texelCoord;\n	void main() {\n		texelCoord = vertexPosition;\n		gl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );\n	}\n\n\n\n\n";
    this._fragSource = "\n#ifdef GL_ES\nprecision highp float;\nprecision highp sampler2D;\n#endif\n\nvarying vec2 texelCoord;\n\nuniform float dt;\n	uniform sampler2D particleData;\n\nuniform float dragCoefficient;\n	uniform vec2 flowScale;\n	uniform sampler2D flowVelocityField;\n	void main() {\n		vec2 p = texture2D(particleData, texelCoord).xy;\n		vec2 v = texture2D(particleData, texelCoord).zw;\n		vec2 vf = texture2D(flowVelocityField, (p+1.)*.5).xy * flowScale;\n		v += (vf - v) * dragCoefficient;\n		p+=dt*v;\n		gl_FragColor = vec4(p, v);\n	}\n";
  }
}
