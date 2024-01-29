import {XTextureBase, XWarpFormatter} from "../models/texture/base.ts";
import {XTexture} from "../models/texture/texture.ts";
import {ShadeHelper} from "../models/shader/helper.ts";

export class XRenderTargetBase {
  gl;
  width;
  height;
  textureParameters;
  textureFactory;

  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext,
              width: number,
              height: number,
              textureParameters: XTextureBase,
              textureFactory?: (gl: WebGLRenderingContext | WebGL2RenderingContext, width: number, height: number) => XTexture) {
    this.gl = gl;
    this.width = width;
    this.height = height;
    this.textureParameters = textureParameters;
    this.textureFactory = textureFactory;
  }

  createEmptyTexture(width: number, height: number): XTexture {
    if (this.textureFactory != null) {
      return this.textureFactory(this.gl, width, height);
    } else {
      return XTexture.createTexture(this.gl, width, height, this.textureParameters, null);
    }
  }

  activate() {

  }

  updateTextureParameters(textureBase: XWarpFormatter) {
    if (textureBase.magFilter) {
      this.textureParameters.magFilter = textureBase.magFilter;
    }
    if (textureBase.minFilter) {
      this.textureParameters.minFilter = textureBase.minFilter;
    }
    if (textureBase.wrapS) {
      this.textureParameters.wrapS = textureBase.wrapS;
    }
    if (textureBase.wrapT) {
      this.textureParameters.wrapT = textureBase.wrapT;
    }
  }
}

export class XRenderTarget extends XRenderTargetBase{
  writeFrameBufferObject;
  readFrameBufferObject;
  readFromTexture: XTexture | null = null;
  writeToTexture: XTexture | null = null;
  tmpFBO: WebGLFramebuffer | null = null;
  tmpTex: XTexture | null = null;

  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext,
              width: number,
              height: number,
              textureParameters: XTextureBase,
              textureFactory?: (gl: WebGLRenderingContext | WebGL2RenderingContext, width: number, height: number) => XTexture) {
    super(gl, width, height, textureParameters, textureFactory);
    this.writeFrameBufferObject = gl.createFramebuffer();
    this.readFrameBufferObject = gl.createFramebuffer();
    this.resize(width, height);
  }


  activate() {
    super.activate();
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.writeFrameBufferObject);
  }

  protected fillTexture(width: number, height: number) {
    const resampleShader = ShadeHelper.getResampleShader(this.gl); // XResampleShader
    resampleShader.texture.dirty = true;
    resampleShader.texture.data = this.readFromTexture!.native;
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.readFrameBufferObject);
    this.gl.viewport(0, 0, width, height);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, ShadeHelper.getScreenTriangle(this.gl));
    resampleShader.setupAndActive();
    this.gl.drawArrays(4, 0, 3);
    resampleShader.deactivate();
    this.gl.deleteTexture(this.readFromTexture!.native);
  }

  resize(width: number, height: number) {
    const writeFrameBuffer = this.createEmptyTexture(width, height);
    const readFrameBuffer = this.createEmptyTexture(width, height);

    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.writeFrameBufferObject);
    this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, writeFrameBuffer.native, 0);
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.readFrameBufferObject);
    this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, readFrameBuffer.native, 0);
    if (this.readFromTexture && this.readFrameBufferObject) {
      this.fillTexture(width, height);
    } else {
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.readFrameBufferObject);
      this.gl.viewport(0, 0, this.width, this.height);
      this.gl.clearColor(0, 0, 0, 1);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    if (this.writeToTexture != null) {
      this.gl.deleteTexture(this.writeToTexture.native);
    } else {
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.writeFrameBufferObject);
      this.gl.viewport(0, 0, this.width, this.height);
      this.gl.clearColor(0, 0, 0, 1);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
    this.width = width;
    this.height = height;
    this.writeToTexture = writeFrameBuffer;
    this.readFromTexture = readFrameBuffer;
    return this;
  }

  updateTextureParameters(textureBase: XWarpFormatter) {
    if (this.readFromTexture === null || this.writeToTexture === null) {
      console.log("readFromTexture or writeToTexture is null")
      return;
    }
    XTexture.updateGLTextureParameters(this.gl, this.readFromTexture.native, textureBase);
    XTexture.updateGLTextureParameters(this.gl, this.writeToTexture.native, textureBase);
    super.updateTextureParameters(textureBase);
  }

  swapBuffers() {
    const tmpFBO = this.readFrameBufferObject;
    this.readFrameBufferObject = this.writeFrameBufferObject;
    this.writeFrameBufferObject = tmpFBO;
    const tmp = this.readFromTexture;
    this.readFromTexture = this.writeToTexture;
    this.writeToTexture = tmp;
  }
}

export class XDiverRenderTarget extends XRenderTargetBase{
  frameBufferObject;
  texture!: XTexture;

  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext,
              width: number,
              height: number,
              textureParameters: XTextureBase,
              textureFactory?: (gl: WebGLRenderingContext | WebGL2RenderingContext, width: number, height: number) => XTexture) {
    super(gl, width, height, textureParameters, textureFactory);
    this.frameBufferObject = gl.createFramebuffer();
    this.resize(width, height);
  }

  protected fillTexture(width: number, height: number) {
    const resampleShader = ShadeHelper.getResampleShader(this.gl); // XResampleShader
    resampleShader.texture.dirty = true;
    resampleShader.texture.data = this.texture.native;
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.frameBufferObject);
    this.gl.viewport(0, 0, width, height);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, ShadeHelper.getScreenTriangle(this.gl));
    resampleShader.setupAndActive();
    this.gl.drawArrays(4, 0, 3);
    resampleShader.deactivate();
    this.gl.deleteTexture(this.texture.native);
  }

  resize(width: number, height: number) {
    const writeToTexture = this.createEmptyTexture(width, height);
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.frameBufferObject);
    this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, writeToTexture!.native, 0);
    if (this.texture && this.frameBufferObject) {
      this.fillTexture(width, height);
    } else {
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.frameBufferObject);
      this.gl.viewport(0, 0, this.width, this.height);
      this.gl.clearColor(0, 0, 0, 1);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
    this.width = width;
    this.height = height;
    this.texture = writeToTexture;
    return this;
  }

  activate() {
    super.activate();
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.frameBufferObject);
  }

  updateTextureParameters(textureBase: XWarpFormatter) {
    if (this.texture) {
      XTexture.updateGLTextureParameters(this.gl, this.texture.native, textureBase);
    }
    super.updateTextureParameters(textureBase);
  }
}
