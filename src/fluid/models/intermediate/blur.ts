import {XIntermediateBase} from "./base.ts";
import {ShadeHelper} from "../shader/helper.ts";
import {XPartShader} from "../shader/part.ts";
import {XTexture} from "../texture/texture.ts";

export class XApplyBlur {
  gl;
  kernelX;
  kernelY;
  blurIntermediateXY;
  blurIntermediateX;
  blurShaderX;
  blurShaderY;
  screenTriangle;

  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, kernelX: number, kernelY: number) {
    this.gl = gl;
    this.kernelX = kernelX;
    this.kernelY = kernelY;
    this.blurIntermediateXY = new XIntermediateBase()
    this.blurIntermediateX = new XIntermediateBase()
    this.blurShaderX = ShadeHelper.getShaderWithKey(gl, "blurX(k" + kernelX + ")", function(e) {
      return new XPartShader(e,new Float32Array([1, 0]), kernelX)
    });
    this.blurShaderY = ShadeHelper.getShaderWithKey(gl, "blurY(k" + kernelY + ")", function(e) {
      return new XPartShader(e,new Float32Array([0, 1]), kernelY)
    });
    this.screenTriangle = ShadeHelper.getScreenTriangle(gl);
  }

  apply(inputTexture: XTexture, targetTexture?: XTexture, outputTexture?: XTexture) {
    if (outputTexture == null) {
      console.log(targetTexture)
      outputTexture = inputTexture;
    }

    const width = inputTexture.width;
    const height = inputTexture.height;

    const intermediateX = this.blurIntermediateX.get(this.gl, width, height, outputTexture);
    const intermediateXY = this.blurIntermediateXY.get(this.gl, width, height, outputTexture);

    this.gl.viewport(0, 0, intermediateX.width, intermediateX.height);
    intermediateX.gl.bindFramebuffer(this.gl.FRAMEBUFFER, intermediateX.frameBufferObject);
    this.gl.bindBuffer(34962, this.screenTriangle);
    if (!this.blurShaderX.texture || !this.blurShaderX.invResolution) {
      console.log("blurShaderX.texture or blurShaderX.invResolution is null")
      return;
    }
    this.blurShaderX.texture.dirty = true;
    this.blurShaderX.texture.data = inputTexture.native;
    (this.blurShaderX.invResolution.data as Float32Array)[0] = 1 / inputTexture.width;
    (this.blurShaderX.invResolution.data as Float32Array)[1] = 1 / inputTexture.height;
    this.blurShaderX.invResolution.dirty = true

    this.blurShaderX.setupAndActive();
    this.gl.drawArrays(4, 0, 3);
    this.blurShaderX.deactivate();
    intermediateXY.gl.bindFramebuffer(36160, intermediateXY.frameBufferObject);
    this.gl.bindBuffer(34962, this.screenTriangle);
    if (!this.blurShaderY.texture || !this.blurShaderY.invResolution) {
      console.log("blurShaderX.texture or blurShaderX.invResolution is null")
      return;
    }
    this.blurShaderY.texture.dirty = true;
    this.blurShaderY.texture.data = intermediateX.texture!.native;
    (this.blurShaderY.invResolution.data as Float32Array)[0] = 1 / inputTexture.width;
    (this.blurShaderY.invResolution.data as Float32Array)[1] = 1 / inputTexture.height;
    this.blurShaderY.invResolution.dirty = true;

    this.blurShaderY.setupAndActive();
    this.gl.drawArrays(4, 0, 3);
    this.blurShaderY.deactivate();

    return intermediateXY.texture;
  }
  releaseGPUMemory() {
    if (this.blurIntermediateX) {
      this.blurIntermediateX.destroy();
    }
    if (this.blurIntermediateXY) {
      this.blurIntermediateXY.destroy();
    }
  }
}
