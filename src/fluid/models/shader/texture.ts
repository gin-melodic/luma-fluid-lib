import {XShaderBase} from "./base.ts";
import {XUniformTexture} from "../XUniform.ts";
import {XAttribute} from "../XAttribute.ts";

export class XTextureShader extends XShaderBase {

  texture!: XUniformTexture
  vertexPosition!: XAttribute
  testVal!: number

  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    super(gl);
    this.createProperties();
  }

  createProperties() {
    super.createProperties();
    this.texture = new XUniformTexture(this.gl, 'texture', null, false)
    this._uniforms.push(this.texture)

    this.vertexPosition = new XAttribute('vertexPosition', 0 ,2)
    this._attributes.push(this.vertexPosition)

    this.testVal = 2;

    this._aStride += 8
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
    gl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0);
}
        `;
    this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform sampler2D texture;
varying vec2 texelCoord;

void main(void){
    gl_FragColor = abs(texture2D(texture, texelCoord));
}
        `;
  }
}
