import {XIntermediate} from "./intermediate.ts";
import {XTexture} from "../texture/texture.ts";
import {ShadeHelper} from "../shader/helper.ts";
import {XConditionsShader} from "../shader/conditionsShader.ts";
import {XStepParticlesShader} from "../shader/stepParticle.ts";
import {XRenderTarget} from "../../render/target.ts";
import {ContextHelper} from "../../util/ContextHelper.ts";
import {XTextureBase} from "../texture/base.ts";

export class XApplyCount {
  gl;
  count;
  downsampleFilters;
  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, count: number) {
    this.gl = gl;
    this.count = count;
    const c = [];
    for (let d = 0; d < count;) {
      ++d;
      c.push(new XIntermediate(gl));
    }
    this.downsampleFilters = c;
  }

  apply(a: XTexture) {
    let b = a;
    for (let c = 0, d = this.count; c < d;) {
      b = this.downsampleFilters[c++].apply(b)!;
    }
    return b;
  }

  releaseGPUMemory() {
    for (let a = 0, b = this.downsampleFilters; a < b.length;) {
      b[a++].releaseGPUMemory();
    }
  }
}

export class XParticlesCount {
  gl;
  screenTriangle;
  initialConditionsShader;
  stepParticlesShader!: XStepParticlesShader;
  particleData: XRenderTarget | null = null
  particleUVs: WebGLBuffer | null = null
  count: number = 0

  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, count = 524288) {
    this.gl = gl;
    gl.getExtension("OES_texture_float");
    this.screenTriangle = ShadeHelper.getScreenTriangle(gl);
    this.initialConditionsShader = new XConditionsShader(gl);
    this.stepParticlesShader = new XStepParticlesShader(gl);

    const dragCoefficient = this.stepParticlesShader.dragCoefficient;
    if (dragCoefficient) {
      dragCoefficient.dirty = true;
      dragCoefficient.data = 1;
    }
    (this.stepParticlesShader.flowScale?.data as Float32Array)[0] = 1;
    (this.stepParticlesShader.flowScale?.data as Float32Array)[1] = 1;
    this.setCount(count);
    const inititalConditionsShader = this.initialConditionsShader;
    const particleData = this.particleData;
    if (particleData) {
      this.gl.viewport(0, 0, particleData.width, particleData.height);
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, particleData.writeFrameBufferObject);
    }
    this.gl.bindBuffer(34962, this.screenTriangle);
    inititalConditionsShader.setupAndActive();
    this.gl.drawArrays(4, 0, 3);
    inititalConditionsShader.deactivate();
    if (particleData) {
      particleData.tmpFBO = particleData.writeFrameBufferObject;
      particleData.writeFrameBufferObject = particleData.readFrameBufferObject;
      particleData.readFrameBufferObject = particleData.tmpFBO;
      particleData.tmpTex = particleData.writeToTexture;
      particleData.writeToTexture = particleData.readFromTexture;
      particleData.readFromTexture = particleData.tmpTex;
    }
    this.printParameters();
  }
  setCount(count: number) {
    const squareRootCount = Math.ceil(Math.sqrt(count));
    const floatColorBufferParameters = ContextHelper.get(this.gl).getWritableFloatColorBufferParameters(6408, (this.gl as WebGL2RenderingContext).HALF_FLOAT, 9728);

    if (floatColorBufferParameters == null) {
      throw new Error("Particles require renderable floating point textures");
    }

    if (this.particleData != null) {
      this.particleData.resize(squareRootCount, squareRootCount);
    } else {
      this.particleData = new XRenderTarget(this.gl, squareRootCount, squareRootCount, new XTextureBase(this.gl, floatColorBufferParameters.format, floatColorBufferParameters.internalFormat, floatColorBufferParameters.dataType, 9728, 9728, 33071, 33071));
    }

    if (this.particleUVs != null) {
      this.gl.deleteBuffer(this.particleUVs);
    }

    this.particleUVs = this.gl.createBuffer();
    const uvData = [];

    for (let i = 0; i < squareRootCount;) {
      for (let j = i++; j < squareRootCount;) {
        uvData.push(j / squareRootCount);
        uvData.push(i / squareRootCount);
      }
    }

    this.gl.bindBuffer(34962, this.particleUVs);
    this.gl.bufferData(34962, new Float32Array(uvData), 35044);
    this.gl.bindBuffer(34962, null);

    this.count = count;
    return this.count;
  }
  printParameters() {
    const log = "<b,gray>><//> " + "" + "<b>GPUParticles Parameters</>\n\t" + ["dragCoefficient: <b>" + (this.stepParticlesShader.dragCoefficient?.data ?? '') + "</b>", "flowScaleX: <b>" + (this.stepParticlesShader.flowScale?.data as Float32Array)[0] + "</b>", "flowScaleY: <b>" + (this.stepParticlesShader.flowScale?.data as Float32Array)[1] + "</b>", "texture size: <b>" + this.particleData?.width + "x" + this.particleData?.height + "</b>"].join("\n\t");
    console.log(log)
  }
}
