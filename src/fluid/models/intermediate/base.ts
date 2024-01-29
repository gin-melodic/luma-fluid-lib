import {XTextureBase} from "../texture/base.ts";
import {XDiverRenderTarget} from "../../render/target.ts";

export class XIntermediateBase {
  _currentTarget: XDiverRenderTarget | null = null;
  get(gl: WebGLRenderingContext | WebGL2RenderingContext,
      width: number,
      height: number,
      textureParameters: XTextureBase) {
    if (this._currentTarget && (width != this._currentTarget.width || height != this._currentTarget.height
      || !textureParameters.match(this._currentTarget.textureParameters))) {
      const target = this._currentTarget;
      target.gl.deleteFramebuffer(target.frameBufferObject);
      target.gl.deleteTexture(target.texture!.native!);
      this._currentTarget = null;
    }
    if (!this._currentTarget) {
      this._currentTarget = new XDiverRenderTarget(gl, width, height, textureParameters);
    }
    return this._currentTarget;
  }

  destroy() {
    if (this._currentTarget) {
      const target = this._currentTarget;
      target.gl.deleteFramebuffer(target.frameBufferObject);
      target.gl.deleteTexture(target.texture!.native!);
    }
  }
}
