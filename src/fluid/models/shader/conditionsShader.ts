import {XShaderBase} from "./base.ts";
import {XAttribute} from "../XAttribute.ts";

export class XConditionsShaderBase extends XShaderBase {
  vertexPosition!: XAttribute

  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    super(gl);
  }

  createProperties() {
    super.createProperties();
    const pos = new XAttribute('vertexPosition', 0, 2)
    this.vertexPosition = pos;
    this._attributes.push(pos);
    this._aStride += 8;
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
`;
  }
}

export class XConditionsShader extends XConditionsShaderBase {
  createProperties() {
    super.createProperties();
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
`,
    this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

varying vec2 texelCoord;

void main() {
    vec2 ip = vec2((texelCoord.x), (texelCoord.y)) * 2.0 - 1.0;
    vec2 iv = vec2(0,0);
    gl_FragColor = vec4(ip, iv);
  }
`;
  }
}
