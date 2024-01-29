import {Global} from "../global.ts";

export interface IXUniform {
  alwaysDirty: boolean
  gl: WebGLRenderingContext | WebGL2RenderingContext;
  name: string;
  location: WebGLUniformLocation | null;
  data: WebGLTexture | Float32Array | null;
  dirty: boolean

  apply(): void
}

export type XUniformDataType = WebGLTexture | Float32Array | number | boolean | null

// XUniform is a class that represents a uniform variable in a shader.
export class XUniform {
  alwaysDirty = false
  gl: WebGLRenderingContext | WebGL2RenderingContext;
  name: string;
  location: WebGLUniformLocation | null;
  data: XUniformDataType;
  dirty = true

  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, name: string, location: WebGLUniformLocation | null, data: XUniformDataType) {
    this.gl = gl
    this.name = name
    this.location = location
    this.data = data
  }
}

export class XUniformTexture extends XUniform {
  cube: boolean
  type: number
  samplerIndex: number = 0
  gpuSideValue: number = -1
  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, name: string, location: WebGLUniformLocation | null, flag = false) {
    super(gl, name, location, null)
    this.cube = flag
    this.type = flag ? gl.TEXTURE_CUBE_MAP : gl.TEXTURE_2D
  }

  apply() {
    if (this.data === null) {
      return
    }
    const samplerIndex = this.gl.TEXTURE0 + this.samplerIndex
    if (Global.lastActiveTexture !== samplerIndex) {
      this.gl.activeTexture(samplerIndex)
      Global.lastActiveTexture = samplerIndex
    }
    this.gl.bindTexture(this.type, this.data)
    if (this.gpuSideValue !== this.samplerIndex) {
      this.gl.uniform1i(this.location, this.samplerIndex)
      this.gpuSideValue = this.samplerIndex
    }
  }
}

export class XUniformArray extends XUniform {
  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, name: string, location: WebGLUniformLocation | null, x = 0, y = 0) {
    const data = new Float32Array([x, y])
    super(gl, name, location, data)
  }

  apply() {
    if (this.data === null) {
      return
    }
    const pos = this.data as Float32Array
    this.gl.uniform2f(this.location, pos[0], pos[1])
    this.dirty = false
  }
}

export class XUniformFloat extends XUniform {
  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, name: string, location: WebGLUniformLocation | null, data = 0) {
    super(gl, name, location, data)
  }

  apply() {
    if (this.data === null) {
      return
    }
    this.gl.uniform1f(this.location, this.data as number)
    this.dirty = false
  }
}

export class XUniformInt extends XUniform {
  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, name: string, location: WebGLUniformLocation | null, data = 0) {
    super(gl, name, location, data)
  }

  apply() {
    if (this.data === null) {
      return
    }
    this.gl.uniform1i(this.location, this.data as number)
    this.dirty = false
  }
}

export class XUniformBool extends XUniform {
  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, name: string, location: WebGLUniformLocation | null, data = false) {
    super(gl, name, location, data)
  }

  apply() {
    if (this.data === null) {
      return
    }
    this.gl.uniform1i(this.location, this.data as boolean ? 1 : 0)
    this.dirty = false
  }
}

export class XUniform4fv extends XUniform {
  arraySize: number
  buffer: Float32Array
  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, name: string, location: WebGLUniformLocation | null, size: number, buffer?: Float32Array | null) {
    const b = buffer || new Float32Array(size * 4)
    super(gl, name, location, b)
    this.arraySize = size
    this.buffer = b
  }

  apply() {
    if (this.data === null) {
      return
    }
    this.gl.uniform4fv(this.location, this.data as Float32Array)
    this.dirty = false
  }
}

export class XUniform2fv extends XUniform {
  arraySize: number
  buffer: Float32Array
  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, name: string, location: WebGLUniformLocation | null, size: number, buffer?: Float32Array | null) {
    const b = buffer || new Float32Array(size * 2)
    super(gl, name, location, b)
    this.arraySize = size
    this.buffer = b
  }

  apply() {
    if (this.data === null) {
      return
    }
    this.gl.uniform2fv(this.location, this.data as Float32Array)
    this.dirty = false
  }
}
