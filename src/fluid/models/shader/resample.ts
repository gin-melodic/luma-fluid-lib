import {XShaderBase} from "./base.ts";
import {XUniformTexture} from "../XUniform.ts";
import {XAttribute} from "../XAttribute.ts";

export class XResampleShader extends XShaderBase {
  texture!: XUniformTexture
  vertexPosition!: XAttribute
  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    super(gl)
    this.createProperties();
  }

  createProperties() {
    super.createProperties();
    const texture = new XUniformTexture(this.gl, "texture", 0, false)
    this.texture = texture
    this._uniforms.push(texture)

    const vertexPosition = new XAttribute("vertexPosition", 0, 2)
    this.vertexPosition = vertexPosition
    this._attributes.push(vertexPosition)

    this._aStride += 8
  }

  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
    varying vec2 texelCoord;
    void main(){
        texelCoord = vertexPosition;
        gl_Position = vec4(vertexPosition*2.0 - 1.0, 0.0, 1.0 );
    }
`;
    this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform sampler2D texture;
varying vec2 texelCoord;
void main(){
    gl_FragColor = texture2D(texture, texelCoord);
}
`;
  }
}
