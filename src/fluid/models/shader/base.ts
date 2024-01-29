import {IXUniform, XUniformTexture} from "../XUniform.ts";
import {Tools} from "../../util/Tools.ts";
import {XAttribute} from "../XAttribute.ts";

export class XShaderBase {
  _aStride = 0
  protected _textures: XUniformTexture[] = []
  _attributes: XAttribute[] = []
  _uniforms: IXUniform[] = []
  protected _numTextures = 0
  protected _vertSource = ""
  protected _fragSource = ""
  protected _vert: WebGLShader | null = null
  protected _frag: WebGLShader | null = null
  _prog: WebGLProgram | null = null
  protected _name = ""
  _ready = false
  _active = false


  gl: WebGL2RenderingContext | WebGLRenderingContext

  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    this.gl = gl
    this._name = this.constructor.name

    // Call child methods
    this.initSources()
    // this.createProperties()
  }

  initSources() {}

  createProperties() {}

  create() {
    this.compile(this._vertSource, this._fragSource)
    this._ready = true
  }

  destroy() {
    this.gl.deleteShader(this._vert)
    this.gl.deleteShader(this._frag)
    this.gl.deleteProgram(this._prog)
    this._prog = null
    this._vert = null
    this._frag = null
    this._ready = false
  }

  compile(vertexSource: string, fragmentSource: string) {
    const vShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    if (!vShader) { throw new Error("Error creating vertex shader"); }
    this.gl.shaderSource(vShader, vertexSource);
    this.gl.compileShader(vShader);
    if (!this.gl.getShaderParameter(vShader, this.gl.COMPILE_STATUS)) {
      // Error handling for vertex shader compilation
      throw new Error("Error compiling vertex shader");
    }

    const fShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    if (!fShader) { throw new Error("Error creating fragment shader"); }
    this.gl.shaderSource(fShader, fragmentSource);
    this.gl.compileShader(fShader);
    if (!this.gl.getShaderParameter(fShader, this.gl.COMPILE_STATUS)) {
      // Error handling for fragment shader compilation
      throw new Error("Error compiling fragment shader");
    }

    const prog = this.gl.createProgram();
    if (prog === null) { throw new Error("Error creating shader program"); }
    this.gl.attachShader(prog, vShader);
    this.gl.attachShader(prog, fShader);
    this.gl.linkProgram(prog);
    if (!this.gl.getProgramParameter(prog, this.gl.LINK_STATUS)) {
      throw new Error("Unable to initialize the shader program." + this.gl.getProgramInfoLog(prog));
    }

    const uniformsMap = new Map<string, WebGLUniformLocation>()
    // Program parameter and uniform/attribute setupAndActive
    for (let s = this.gl.getProgramParameter(prog, this.gl.ACTIVE_UNIFORMS) as GLint; s-- > 0; ) {
      const info = this.gl.getActiveUniform(prog, s) as WebGLActiveInfo
      const loc = this.gl.getUniformLocation(prog, info.name) as WebGLUniformLocation
      uniformsMap.set(info.name, loc)
    }
    const attributesMap = new Map<string, GLint>()
    for (let s = this.gl.getProgramParameter(prog, this.gl.ACTIVE_ATTRIBUTES) as GLint; s-- > 0; ) {
      const info = this.gl.getActiveAttrib(prog, s) as WebGLActiveInfo
      const loc = this.gl.getAttribLocation(prog, info.name)
      attributesMap.set(info.name, loc)
    }
    this._vert = vShader
    this._frag = fShader
    this._prog = prog

    this._numTextures = 0
    const uniformsWillRemoved: IXUniform[] = []

    let q = 0
    for (let uniform = this._uniforms; q < uniform.length; q++) {
      const obj = uniform[q]
      let old = uniformsMap.get(obj.name)
      if (!old) {
        old = uniformsMap.get(obj.name + "[0]")
      }
      if (obj instanceof XUniformTexture) {
        obj.samplerIndex = this._numTextures++;
        this._textures[obj.samplerIndex] = obj
      }
      if (old) {
        obj.location = old
      } else {
        uniformsWillRemoved.push(obj)
      }
    }

    while (uniformsWillRemoved.length > 0) {
      const uniform = uniformsWillRemoved.pop()
      Tools.remove(this._uniforms, uniform)
    }

    q = 0
    const attributes = this._attributes;
    while (q < attributes.length) {
      const attr = attributes[q++]
      const old = attributesMap.get(attr.name)
      attr.location = old === null || old === undefined ? -1 : old;
    }
  }

  deactivate() {
    if (this._active) {
      this._active = false
      this.disableAttributes();
    }
  }

  disableAttributes() {
    for (let a = 0, len = this._attributes.length; a < len; a++) {
      const loc = this._attributes[a].location
      if (loc !== -1) {
        this.gl.disableVertexAttribArray(loc)
      }
    }
  }

  toString() {
    return "[Shader(" + this._name + ", attributes:" + this._attributes.length + ", uniforms:" + this._uniforms.length + ")]";
  }

  setupAndActive() {
    if (!this._active) {
      if (!this._ready) {
        this.create();
      }
      this.gl.useProgram(this._prog);
    }

    for (const uniform of this._uniforms) {
      if (uniform.dirty || uniform.alwaysDirty) {
        uniform.apply();
      }
    }
    let offset = 0;
    for (const attribute of this._attributes) {
      if (attribute.location !== -1) {
        this.gl.enableVertexAttribArray(attribute.location);
        this.gl.vertexAttribPointer(attribute.location, attribute.itemCount, attribute.type, false, this._aStride, offset);
      }
      offset += attribute.byteSize;
    }

    if (!this._active) {
      this._active = true;
    }
  }
}
