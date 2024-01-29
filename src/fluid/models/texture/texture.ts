import {XTextureBase, XWarpFormatter} from "./base.ts";

export class ResetAlignFilp {
  unpackAlignment;
  webGLFlipY;
  constructor(unpackAlignment: number = 4, webGLFlipY: boolean = true) {
    this.unpackAlignment = unpackAlignment;
    this.webGLFlipY = webGLFlipY;
  }
}

export class XTexture extends XTextureBase {
  gl;
  width;
  height;
  native;
  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext,
              width: number,
              height: number,
              native: WebGLTexture,
              format: number,
              internalFormat: number | null,
              dataType: number,
              magFilter: number,
              minFilter: number,
              wrapS: number,
              wrapT: number) {
    super(gl, format, internalFormat, dataType, magFilter, minFilter, wrapS, wrapT);
    this.gl = gl;
    this.width = width;
    this.height = height;
    this.native = native;
  }

  static createTextureFromImage(gl: WebGLRenderingContext | WebGL2RenderingContext,
                                pixels: ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap,
                                textureBase?: XTextureBase,
                                alignFlip?: ResetAlignFilp,
                                isGenMipmap?: boolean) {
    if (!textureBase) {
      textureBase = new XTextureBase(gl, null, null, null, null, null, null, null);
    }
    if (!alignFlip) { alignFlip = new ResetAlignFilp() }
    if (!isGenMipmap) {
      switch (textureBase.minFilter) {
        case gl.NEAREST_MIPMAP_NEAREST:
        case gl.LINEAR_MIPMAP_NEAREST:
        case gl.NEAREST_MIPMAP_LINEAR:
        case gl.LINEAR_MIPMAP_LINEAR:
          isGenMipmap = true;
          break;
        default:
          isGenMipmap = false;
      }
    }
    const texture = gl.createTexture();
    if (!texture) {
      throw new Error("create texture failed")
    }
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, textureBase.minFilter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, textureBase.magFilter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, textureBase.wrapS);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, textureBase.wrapT);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, alignFlip.unpackAlignment);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, alignFlip.webGLFlipY);
    gl.texImage2D(gl.TEXTURE_2D, 0, textureBase.internalFormat === null ? textureBase.format : textureBase.internalFormat, textureBase.format, textureBase.dataType, pixels);
    if (isGenMipmap) {
      gl.generateMipmap(gl.TEXTURE_2D);
    }
    gl.bindTexture(gl.TEXTURE_2D, null);
    return new XTexture(gl, pixels.width, pixels.height, texture, textureBase.format, textureBase.internalFormat, textureBase.dataType, textureBase.magFilter, textureBase.minFilter, textureBase.wrapS, textureBase.wrapT);
  }

  static createTexture(gl: WebGLRenderingContext | WebGL2RenderingContext,
                       width: number,
                       height: number,
                       textureBase? : XTextureBase,
                       pixels?: ArrayBufferView | null,
                       alignFlip?: ResetAlignFilp | null,
                       isGenMipmap?: boolean) {
    if (!textureBase) {
      textureBase = new XTextureBase(gl, null, null, null, null, null, null, null);
    }
    if (!alignFlip) { alignFlip = new ResetAlignFilp() }
    if (!isGenMipmap) {
      switch (textureBase.minFilter) {
        case gl.NEAREST_MIPMAP_NEAREST:
        case gl.LINEAR_MIPMAP_NEAREST:
        case gl.NEAREST_MIPMAP_LINEAR:
        case gl.LINEAR_MIPMAP_LINEAR:
          isGenMipmap = true;
          break;
        default:
          isGenMipmap = false;
      }
    }
    if (!pixels) { pixels = null; }
    const texture = gl.createTexture();
    if (!texture) {
      throw new Error("create texture failed")
    }
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, textureBase.minFilter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, textureBase.magFilter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, textureBase.wrapS);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, textureBase.wrapT);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, alignFlip.unpackAlignment);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, alignFlip.webGLFlipY);
    gl.texImage2D(gl.TEXTURE_2D, 0, textureBase.internalFormat === null ? textureBase.format : textureBase.internalFormat, width, height, 0, textureBase.format, textureBase.dataType, pixels);
    if (isGenMipmap) {  gl.generateMipmap(gl.TEXTURE_2D); }
    gl.bindTexture(gl.TEXTURE_2D, null);
    return new XTexture(gl, width, height, texture, textureBase.format, textureBase.internalFormat, textureBase.dataType, textureBase.magFilter, textureBase.minFilter, textureBase.wrapS, textureBase.wrapT);
  }

  static updateGLTextureParameters(gl: WebGLRenderingContext | WebGL2RenderingContext,
                                   texture: WebGLTexture,
                                   textureBase: XWarpFormatter) {
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    if (textureBase.magFilter) {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, textureBase.magFilter);
    }
    if (textureBase.minFilter) {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, textureBase.minFilter);
    }
    if (textureBase.wrapS) {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, textureBase.wrapS);
    }
    if (textureBase.wrapT) {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, textureBase.wrapT);
    }
    gl.bindTexture(gl.TEXTURE_2D, null);
  }
}
