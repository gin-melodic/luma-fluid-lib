import {XIntermediateBase} from "./base.ts";
import {ShadeHelper} from "../shader/helper.ts";
import {XTexture} from "../texture/texture.ts";

export class XIntermediate {
  gl;
  intermediate;
  resampleShader;
  screenTriangle;

  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext) {
    this.gl = gl;
    this.intermediate = new XIntermediateBase();
    this.resampleShader = ShadeHelper.getResampleShader(gl);
    this.screenTriangle = ShadeHelper.getScreenTriangle(gl);
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  apply(texture: XTexture, seg?: unknown, addition?: XTexture) {
    if (addition) {
      addition = texture;
    }

    const renderTarget = this.intermediate.get(this.gl, texture.width * 0.5 | 0, texture.height * 0.5 | 0, addition!);
    renderTarget.gl.bindFramebuffer(this.gl.FRAMEBUFFER, renderTarget.frameBufferObject);
    this.gl.viewport(0, 0, renderTarget.width, renderTarget.height);
    this.gl.bindBuffer(34962, this.screenTriangle);
    this.resampleShader.texture.dirty = true;
    this.resampleShader.texture.data = texture.native;
    this.resampleShader.setupAndActive();
    this.gl.drawArrays(4, 0, 3);
    this.resampleShader.deactivate();
    return renderTarget.texture;
  }

  releaseGPUMemory() {
    if (this.intermediate != null) {
      this.intermediate.destroy();
    }
  }
}
