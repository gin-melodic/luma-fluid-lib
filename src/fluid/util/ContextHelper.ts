import {RegExpHelper} from "./RegExpHelper.ts";
import {XTextureBase} from "../models/texture/base.ts";
import {XTexture} from "../models/texture/texture.ts";

export class ContextHelper {
  static capsCache = []

  gl;
  _contextVersion: {es: boolean, major: number, minor: number} | null = null;
  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    this.gl = gl;
  }

  static get(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    // ContextHelper.capsCache
    /*
    for (var b = 0, capsCache = ContextHelper.capsCache; b < capsCache.length;) {
      var d = capsCache[b];
      ++b;
      if (gl == d.gl) {
        return d;
      }
    }
     */
    return new ContextHelper(gl);
  }

  getContextVersion() {
    if (!this._contextVersion) {
      const glVersion = this.gl.getParameter(this.gl.VERSION);
      const reg = new RegExpHelper("((OpenGL ES|WebGL)\\s*)?(\\d+)\\.(\\d+)", "ig");
      if (reg.match(glVersion)) {
        const c = reg.matched(2)
        const isWebGL = c.toLowerCase() === "webgl"
        this._contextVersion = {
          es: !!c,
          major: ((parseInt(reg.matched(3)) ?? 0) + (isWebGL ? 1 : 0)) || -1,
          minor: parseInt(reg.matched(4)) ?? -1
        }
      } else {
        this._contextVersion = {
          es: false,
          major: -1,
          minor: -1
        }
      }
    }
    return this._contextVersion
  }

  testWritableColorBuffer(textureBase: XTextureBase) {
    while (this.gl.getError() != 0) {
      console.log("gl.getError() != 0")
    }
    const texture = XTexture.createTexture(this.gl, 2, 2, textureBase)
    let b = 0
    while (this.gl.getError() != 0) {
      console.log("gl.getError() != 0")
      ++b;
      if (b > 100) {
        console.log("gl.getError() != 0, 100 times, interrupted")
        return false
      }
    }
    if (b > 0) {
      console.log("gl.getError() != 0 in testWritableColorBuffer, " + b + " times")
      return false
    }
    const buffer = this.gl.createFramebuffer();
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, buffer);
    this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, texture.native, 0);
    b = 0;
    while (this.gl.getError() != 0) {
      ++b;
      if (b > 100) {
        console.log("framebufferTexture2D gl.getError() != 0, 100 times, interrupted")
        return false
      }
    }
    if (b > 0) {
      console.log("framebufferTexture2D gl.getError() != 0, " + b + " times")
      return false;
    }
    const done = this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER) == this.gl.FRAMEBUFFER_COMPLETE;
    this.gl.deleteTexture(texture.native);
    this.gl.deleteFramebuffer(buffer);
    this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    return done;
  }

  getWritableFloatColorBufferParameters(format: 6403 | 33319 | 6407 | 6408, dataType: number | null, filtering: number | null) {
    const version = this.getContextVersion()
    // Texture formats
    const formats = [6403/*RED*/, 33319/*RG*/, 6407/*RGB*/, 6408/*RGBA*/];
    const dataTypes = [5131/*HALF_FLOAT*/, 5126/*FLOAT*/];
    if (!format || !dataType) { return null }
    let formatIndex = formats.indexOf(format);
    let dataTypeIndex = dataTypes.indexOf(dataType);
    if (filtering == this.gl.LINEAR) {
      this.gl.getExtension("OES_texture_float_linear");
      this.gl.getExtension("OES_texture_half_float_linear");
    }
    if (version.es && version.major <= 2) {
      // Use for WebGL 1.0
      // usually, not enter this branch
      this.gl.getExtension("OES_texture_float");
      this.gl.getExtension("OES_texture_half_float");
      this.gl.getExtension("EXT_color_buffer_half_float");
      format = formats[Math.max(formatIndex, 2) | 0] as 6403 | 33319 | 6407 | 6408;
      while (dataTypeIndex < dataTypes.length) {
        if ((dataType = dataTypes[dataTypeIndex++]) == 5131) {
          dataType = 36193;
        }
        if (this.testWritableColorBuffer(new XTextureBase(this.gl, format, format, dataType, filtering, filtering, 33071, 33071))) {
          return {
            format: format,
            internalFormat: format,
            dataType: dataType,
            filtering: filtering
          };
        }
      }
    } else {
      // Use for >= WebGL 2.0
      this.gl.getExtension("EXT_color_buffer_float");
      if (!(this.gl instanceof WebGL2RenderingContext)) {
        console.error("getWritableFloatColorBufferParameters: WebGL2RenderingContext required");
        return null;
      }
      let internalFormat;
      const format16Map = {
        6403: this.gl.R16F,
        33319: this.gl.RG16F,
        6407: this.gl.RGB16F,
        6408: this.gl.RGBA16F,
      }
      const format32Map = {
        6403: this.gl.R32F,
        33319: this.gl.RG32F,
        6407: this.gl.RGB32F,
        6408: this.gl.RGBA32F,
      }
      for (dataType = dataTypes[dataTypeIndex++]; formatIndex < formats.length;) {
        const f = formats[formatIndex++] as 6403 | 33319 | 6407 | 6408;
        switch (dataType) {
          case this.gl.FLOAT:
          default:
            internalFormat = format32Map[f];
            break;
          case this.gl.HALF_FLOAT:
            internalFormat = format16Map[f];
        }
        if (this.testWritableColorBuffer(new XTextureBase(this.gl, f, internalFormat,
          dataType, filtering, filtering, 33071, 33071))) {
          return {
            format: f,
            internalFormat: internalFormat,
            dataType: dataType,
            filtering: filtering
          };
        }
      }
    }
    return null;
  }
}
