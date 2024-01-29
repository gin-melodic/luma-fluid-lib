// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { FluidSetting } from './Settings.js'
import {XBox} from "../models/XBox.ts";
import {XTextureBase} from "../models/texture/base.ts";
import {ResetAlignFilp, XTexture} from "../models/texture/texture.ts";
import {XFluidShader} from "../models/shader/fluid.ts";
import {XUpdateForceShader} from "../models/shader/update.ts";
import {XTextureShader} from "../models/shader/texture.ts";
import {XParticlesShader} from "../models/shader/particles.ts";
import {XSurfaceShader} from "../models/shader/surface.ts";
import {ShadeHelper} from "../models/shader/helper.ts";
import {XUniformDataType} from "../models/XUniform.ts";
import {FluidManager} from "./FluidManager.ts";
import {ContextHelper} from "../util/ContextHelper.ts";
import {XDiverRenderTarget} from "./target.ts";
import {XApplyCount, XParticlesCount} from "../models/intermediate/count.ts";
import {XActionPoint} from "../models/XActionPoint.ts";
import {Tools} from "../util/Tools.ts";
import {XApplyBlur} from "../models/intermediate/blur.ts";

class BloomFilter {
  gl;
  blurKernelNormalized;
  downsampleSize;
  screenTriangle;
  downsampleChain: XApplyCount | null = null
  blur: XApplyBlur | null = null
  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext,
              blurKernelNormalized: number = 0.08,
              downsampleSize: number = 128) {
    this.gl = gl
    this.blurKernelNormalized = blurKernelNormalized
    this.downsampleSize = downsampleSize
    this.screenTriangle = ShadeHelper.getScreenTriangle(gl);
  }

  releaseGPUMemory() {
    if (this.downsampleChain) {// XApplyCount
      this.downsampleChain.releaseGPUMemory()
    }
  }
}

export class FluidRender {
  gl;
  drawingBufferWidth
  drawingBufferHeight
  savedSettings: string | null = null
  lumaLogoPromise: Promise<{img: HTMLImageElement, texture: XTexture}> | null = null
  lumaLogoTexture: XTexture | null = null
  settings = new FluidSetting()
  particleCount = 65536
  showDebugTextures = false
  postProcessingEnabled = false
  remapFluidColor = true
  renderParticlesEnabled = false
  pointerDataBuffer = new Float32Array(20)
  pointerPositionsBuffer = new Float32Array(40)
  activePointersLastFrame :XBox<XActionPoint> = new XBox()
  activePointers:XBox<XActionPoint> = new XBox()
  screenBuffer: WebGLFramebuffer | null = null
  screenTriangle: WebGLBuffer | null = null
  lastTime: number = Tools.now() / 1000
  textureSrc: string
  logoSrc: string
  renderFluidShader!: XFluidShader
  updateForceShader!: XUpdateForceShader
  hx__closures__: {[key:number]: object} | null = null

  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext,
              logoSrc: string,
              textureSrc: string) {
    this.gl = gl
    this.drawingBufferWidth = gl.drawingBufferWidth
    this.drawingBufferHeight = gl.drawingBufferHeight
    this.logoSrc = logoSrc
    this.textureSrc = textureSrc
    this.gl.getExtension('OES_standard_derivatives')
    this.updateLumaLogo();
    this.screenBuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING);
    if (this.screenBuffer) {
      const log = "Screenbuffer at initialization is: " + this.screenBuffer;
      console.log(log);
      return;
    }
    // const debugInfo = gl.getExtension('WEBGL_debug_renderer_info') ? {
    //   renderer: gl.getParameter(37446),
    //   vendor: gl.getParameter(37445),
    // } : {
    //   renderer: gl.getParameter(gl.RENDERER),
    //   vendor: gl.getParameter(gl.VENDOR),
    // };
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.disable(gl.DITHER);
    this.initializeGPUResources();
  }

  updateLumaLogo() {
    if (!this.lumaLogoPromise) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const that = this;
      this.lumaLogoPromise = new Promise((resolve, reject) => {
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.onload = () => {
          const base = new XTextureBase(that.gl, that.gl.RGBA, that.gl.RGBA, that.gl.UNSIGNED_BYTE,
            that.gl.NEAREST, that.gl.NEAREST, that.gl.CLAMP_TO_EDGE, that.gl.CLAMP_TO_EDGE)
          const texture = XTexture.createTextureFromImage(that.gl, image, base,
            new ResetAlignFilp(1, true), true);
          resolve({ img: image, texture })
        };
        image.onerror = (e) => {
          reject(e);
        };
        image.src = this.logoSrc;
      });
    }

    this.lumaLogoPromise.then((data) => {
      this.lumaLogoTexture = data.texture;
      if (!this.renderFluidShader) {
        console.error("renderFluidShader is null")
        return false
      }
      const logoRenderTexture = this.renderFluidShader.lumaLogoTexture
      const texture = this.lumaLogoTexture.native;
      if (!logoRenderTexture) {
        console.error("lumaLogoTexture is null")
        return false
      }
      logoRenderTexture.dirty = true;
      logoRenderTexture.data = texture;

      if (!this.updateForceShader) {
        console.error("updateForceShader is null")
        return false
      }
      const logoInUpdateForceShader = this.updateForceShader.lumaLogoTexture
      const textureInUpdateForceShader = this.lumaLogoTexture.native;
      if (!logoInUpdateForceShader) {
        console.error("lumaLogoTexture is null")
        return false
      }
      logoInUpdateForceShader.dirty = true;
      return logoInUpdateForceShader.data = textureInUpdateForceShader
    })
  }

  fluid!: FluidManager
  offscreenTarget!: XDiverRenderTarget
  bloomFilter!: BloomFilter

  initializeGPUResources() {
    this.initializeShaders()
    this.screenTriangle = ShadeHelper.getScreenTriangle(this.gl);
    this.fluid = new FluidManager(this.gl, this.settings.fluidScale * this.drawingBufferWidth | 0, this.settings.fluidScale * this.drawingBufferHeight | 0, this.settings.simulationScale, this.settings.fluidPhysicsScale, this.settings.fluidIterations, this.settings.powerOf2Fluid, this.updateForceShader, this.updateSurfaceShader);
    const fluid = this.fluid;
    const d = this.settings.periodicBoundary;
    fluid.periodicBoundary = d;
    fluid.setWrapMode(d ? this.gl.REPEAT : this.gl.CLAMP_TO_EDGE);
    fluid.updateBaseUniforms();
    this.fluid.solverIterations = 0;
    this.updateSurfaceShader.decayFactor.dirty = true;
    this.updateSurfaceShader.decayFactor.data = 1;
    this.updateForceShader.decayFactor.dirty = true;
    this.updateForceShader.decayFactor.data = 1;
    this.fluid.step(1);
    this.fluid.solverIterations = this.settings.fluidIterations;
    this.updateSurfaceShader.decayFactor.dirty = true;
    this.updateSurfaceShader.decayFactor.data = this.settings.surfaceDecayFactor;
    this.updateForceShader.decayFactor.dirty = true;
    this.updateForceShader.decayFactor.data = this.settings.motionDecayFactor;
    const e = ContextHelper.get(this.gl).getWritableFloatColorBufferParameters(this.gl.RGB, 5131, 9729);
    if (!e) {
      console.error("getWritableFloatColorBufferParameters is null")
      return
    }
    this.offscreenTarget = new XDiverRenderTarget(this.gl, this.fluid.width, this.fluid.height, new XTextureBase(this.gl, e.format, e.internalFormat, e.dataType, e.filtering, e.filtering, 33071, 33071));
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    this.settings.setChangeCallbacks({
      onChangeVersion: function () { },
      onChangePaused: function () { },
      onChangeTimestepMultiplier: function () { },
      onChangeFluidPhysicsScale: function (a: number) {
        const d = that.fluid!;
        d.physicsScale = a;
        d.updateBaseUniforms();
      },
      onChangeSurfaceDecayFactor: function (a: XUniformDataType) {
        const d = that.updateSurfaceShader!.decayFactor!;
        d.dirty = true;
        d.data = a;
      },
      onChangeMotionDecayFactor: function (a: XUniformDataType) {
        const d = that.updateForceShader!.decayFactor!;
        d.dirty = true;
        d.data = a;
      },
      onChangeDragCoefficient: function (a: XUniformDataType) {
        const d = that.updateForceShader!.dragCoefficient!;
        d.dirty = true;
        d.data = a;
      },
      onChangeDragSpeed: function (a: XUniformDataType) {
        const d = that.updateForceShader!.dragSpeed!;
        d.dirty = true;
        d.data = a;
      },
      onChangePeriodicBoundary: function (a: boolean) {
        const d = that.fluid!;
        d.periodicBoundary = a;
        d.setWrapMode(a ? 10497 : 33071);
        d.updateBaseUniforms();
      },
      onChangeBackgroundMultiplier: function (a: XUniformDataType) {
        const d = that.updateSurfaceShader!.backgroundMultiplier!;
        d.dirty = true;
        d.data = a;
      },
      onChangeFluidIterations: function (a: number) {
        that.fluid!.solverIterations = a;
      },
      onChangeGamma: function (a: number) {
        const d = that.renderFluidShader!.invGamma!;
        d.dirty = true;
        d.data = 1 / a;
      },
      onChangeRefraction: function (a: number) {
        const d = that.renderFluidShader!.refraction!;
        d.dirty = true;
        d.data = a;
      },
      onChangeChromaticAberration: function (a: number) {
        const d = that.renderFluidShader!.chromaticAberration!;
        d.dirty = true;
        d.data = a;
      },
      onChangeInnerDarkening: function (a: number) {
        const d = that.renderFluidShader!.innerDarkening!;
        d.dirty = true;
        d.data = a;
      },
      onChangeBevelCurveRadius: function () {
        that.updateLumaLogo();
      },
      onChangeGradientBackground: function (a: number) {
        const d = that.renderFluidShader!.gradientBackground!;
        d.dirty = true;
        d.data = a;
      },
      onChangeFluidScale: function () {
        that.resize(that.drawingBufferWidth, that.drawingBufferHeight);
      },
      onChangeSimulationScale: function () {
        that.resize(that.drawingBufferWidth, that.drawingBufferHeight);
      },
      onChangePowerOf2Fluid: function () {
        that.resize(that.drawingBufferWidth, that.drawingBufferHeight);
      }
    });
    this.bloomFilter = new BloomFilter(this.gl);
    const textureImg = new Image();
    textureImg.crossOrigin = "anonymous";
    textureImg.src = this.textureSrc;
    const a = new XTextureBase(this.gl,6408, null, 5121, 9729, 9729, 10497, 10497);
    textureImg.onload = function () {
      const c = XTexture.createTexture(that.gl, textureImg.width, textureImg.height, a, null, null, false);
      that.gl.activeTexture(that.gl.TEXTURE0);
      that.gl.bindTexture(that.gl.TEXTURE_2D, c.native);
      that.gl.texSubImage2D(that.gl.TEXTURE_2D, 0, 0, 0, a.format, a.dataType, textureImg);
      that.gl.generateMipmap(that.gl.TEXTURE_2D);
      that.gl.bindTexture(that.gl.TEXTURE_2D, null);
      that.gl.deleteTexture(that.updateSurfaceShader!.backgroundTexture!.data);
      const d = that.updateSurfaceShader!.backgroundTexture!;
      d.dirty = true;
      return d.data = c.native;
    };
  }

  screenTextureShader!: XTextureShader
  renderParticlesShader!: XParticlesShader
  updateSurfaceShader!: XSurfaceShader

  initializeShaders() {
    this.screenTextureShader = new XTextureShader(this.gl);
    this.renderParticlesShader = new XParticlesShader(this.gl);
    this.updateSurfaceShader = new XSurfaceShader(this.gl);

    // Update surface shader
    let textureData = ShadeHelper.getNullTexture(this.gl).native;
    this.updateSurfaceShader.userVelocityTexture.dirty = true;
    this.updateSurfaceShader.userVelocityTexture.data = textureData;
    this.updateSurfaceShader.decayFactor.dirty = true;
    this.updateSurfaceShader.decayFactor.data = this.settings.surfaceDecayFactor;
    this.updateSurfaceShader.pointerPositions.dirty = true;
    this.updateSurfaceShader.pointerPositions.data = this.pointerPositionsBuffer;
    this.updateSurfaceShader.pointerPositions.alwaysDirty = true;
    this.updateSurfaceShader.pointerData.dirty = true;
    this.updateSurfaceShader.pointerData.data = this.pointerDataBuffer;
    this.updateSurfaceShader.pointerData.alwaysDirty = true;
    this.updateSurfaceShader.backgroundMultiplier.dirty = true;
    this.updateSurfaceShader.backgroundMultiplier.data = this.settings.backgroundMultiplier;
    this.updateSurfaceShader.set_enableUserVelocity("false");

    // Update force shader
    this.updateForceShader = new XUpdateForceShader(this.gl);
    textureData = ShadeHelper.getNullTexture(this.gl).native;
    this.updateForceShader.userVelocityTexture.dirty = true;
    this.updateForceShader.userVelocityTexture.data = textureData;
    this.updateForceShader.dragCoefficient.dirty = true;
    this.updateForceShader.dragCoefficient.data = this.settings.dragCoefficient;
    this.updateForceShader.dragSpeed.dirty = true;
    this.updateForceShader.dragSpeed.data = this.settings.dragSpeed;
    this.updateForceShader.decayFactor.dirty = true;
    this.updateForceShader.decayFactor.data = this.settings.motionDecayFactor;
    this.updateForceShader.pointerPositions.dirty = true;
    this.updateForceShader.pointerPositions.data = this.pointerPositionsBuffer;
    this.updateForceShader.pointerPositions.alwaysDirty = true;
    this.updateForceShader.pointerData.dirty = true;
    this.updateForceShader.pointerData.data = this.pointerDataBuffer;
    this.updateForceShader.pointerData.alwaysDirty = true;
    const g = this.updateForceShader.gravity!.data as Float32Array;
    g[0] = 0;
    g[1] = 0;
    this.updateForceShader.set_enableUserVelocity("false");

    // Render fluid shader
    this.renderFluidShader = new XFluidShader(this.gl);
    this.renderFluidShader.invGamma.dirty = true;
    this.renderFluidShader.invGamma.data = 1 / this.settings.gamma;
    this.renderFluidShader.chromaticAberration.dirty = true;
    this.renderFluidShader.chromaticAberration.data = this.settings.chromaticAberration;
    this.renderFluidShader.refraction.dirty = true;
    this.renderFluidShader.refraction.data = this.settings.refraction;
    this.renderFluidShader.innerDarkening.dirty = true;
    this.renderFluidShader.innerDarkening.data = this.settings.innerDarkening;
    this.renderFluidShader.gradientBackground.dirty = true;
    this.renderFluidShader.gradientBackground.data = this.settings.gradientBackground;
  }

  resize(width: number, height: number) {
    this.drawingBufferWidth = width;
    this.drawingBufferHeight = height;
    const scaleX = this.settings.fluidScale * this.drawingBufferWidth | 0;
    const scaleY = this.settings.fluidScale * this.drawingBufferHeight | 0;
    const fluid = this.fluid;
    if (!fluid) {
      console.error("fluid is null")
      return false
    }
    const simulationScale = this.settings.simulationScale;
    const powerOf2Fluid = this.settings.powerOf2Fluid;
    if (scaleX != null) {
      fluid.width = scaleX;
    }
    if (scaleY != null) {
      fluid.height = scaleY;
    }
    if (simulationScale != null) {
      fluid.simulationScale = simulationScale;
    }
    if (powerOf2Fluid != null) {
      fluid.powerOf2Surface = powerOf2Fluid;
    }
    fluid.aspectRatio = fluid.width / fluid.height;
    fluid.updateTextureSizes();
    const target = this.offscreenTarget;
    if (!target) {
      console.error("offscreenTarget is null")
      return false
    }
    target.resize(fluid.width, fluid.height);
    this.updateLumaLogo();
  }

  onFrame(lastTime: number) {
    if (!this.fluid) {
      console.warn("fluid is null")
      return
    }
    if (!this.settings.paused) {
      const deltaTime = Math.max(Math.min(lastTime - this.lastTime, 33.333333333333336) / 1000, 0.004166666666666667);
      this.lastTime = lastTime;
      const texture = ShadeHelper.getNullTexture(this.gl);
      this.updateForceShader.userVelocityTexture.dirty = true;
      this.updateForceShader.userVelocityTexture.data = texture.native;
      this.updateSurfaceShader.userVelocityTexture.dirty = true;
      this.updateSurfaceShader.userVelocityTexture.data = texture.native;
      this.updateForceShader.viewportAspectRatio.dirty = true;
      this.updateForceShader.viewportAspectRatio.data = this.drawingBufferWidth / this.drawingBufferHeight;
      const currentTime = lastTime / 1000;
      this.updateSurfaceShader.time_s.dirty = true;
      this.updateSurfaceShader.time_s.data = currentTime;
      this.updateForceShader.time_s.dirty = true;
      this.updateForceShader.time_s.data = currentTime;
      this.renderFluidShader.time_s.dirty = true;
      this.renderFluidShader.time_s.data = currentTime;

      let pointerIndex = 0;
      const activePointers = this.activePointers;
      for (const keys = activePointers.keys(); keys.hasNext();) {
        const pointerId = String(keys.next());
        const pointer = activePointers.get(pointerId)!;
        if (pointerIndex >= 10) {
          break;
        }
        const previousPointer = this.activePointersLastFrame.content.get(pointerId) || pointer;
        const positionIndex = pointerIndex * 4;
        this.pointerPositionsBuffer[positionIndex] = (pointer.x / this.drawingBufferWidth * 2 - 1) * this.fluid.aspectRatio;
        this.pointerPositionsBuffer[positionIndex + 1] = (this.drawingBufferHeight - pointer.y) / this.drawingBufferHeight * 2 - 1;
        this.pointerPositionsBuffer[positionIndex + 2] = (previousPointer.x / this.drawingBufferWidth * 2 - 1) * this.fluid.aspectRatio;
        this.pointerPositionsBuffer[positionIndex + 3] = (this.drawingBufferHeight - previousPointer.y) / this.drawingBufferHeight * 2 - 1;

        const dataIndex = pointerIndex * 2;
        this.pointerDataBuffer[dataIndex] = pointer.radius / this.drawingBufferWidth * this.fluid.aspectRatio;
        this.pointerDataBuffer[dataIndex + 1] = 0.5;

        // Response to pointer events
        const prev = this.activePointersLastFrame.content.get(pointerId);
        if (prev) {
          prev.type = pointer.type;
          prev.x = pointer.x;
          prev.y = pointer.y;
          prev.buttonState = pointer.buttonState;
          prev.pressure = pointer.pressure;
          prev.radius = pointer.radius;
          prev.angle = pointer.angle;
          prev.altitudeAngle = pointer.altitudeAngle;
          prev.azimuthAngle = pointer.azimuthAngle;
        } else {
          this.activePointersLastFrame.content.set(pointerId, new XActionPoint(pointer.type, pointer.x, pointer.y, pointer.buttonState, pointer.pressure, pointer.radius, pointer.angle, pointer.altitudeAngle, pointer.azimuthAngle))
        }
        ++pointerIndex;
      }
      this.updateSurfaceShader.activePointerCount.dirty = true;
      this.updateSurfaceShader.activePointerCount.data = pointerIndex;
      this.updateForceShader.activePointerCount.dirty = true;
      this.updateForceShader.activePointerCount.data = pointerIndex;
      this.fluid.step(deltaTime * this.settings.timestepMultiplier);
      if (this.renderParticlesEnabled && !this.particles) {
        this.initializeParticles();
      }
      if (this.renderParticlesEnabled) {
        this.particles.stepParticlesShader.flowVelocityField.dirty = true;
        this.particles.stepParticlesShader.flowVelocityField.data = this.fluid.velocityRenderTarget.readFromTexture!.native;
        const particles = this.particles!;
        particles.stepParticlesShader.dt.dirty = true;
        particles.stepParticlesShader.dt.data = deltaTime * this.settings.timestepMultiplier;
        particles.stepParticlesShader.particleData!.dirty = true;
        particles.stepParticlesShader.particleData!.data = particles.particleData!.readFromTexture!.native;
        const stepParticlesShader = particles.stepParticlesShader;
        const particleData = particles.particleData!;
        particles.gl.viewport(0, 0, particleData.width, particleData.height);
        particles.gl.bindFramebuffer(this.gl.FRAMEBUFFER, particleData.writeFrameBufferObject);
        particles.gl.bindBuffer(this.gl.ARRAY_BUFFER, particles.screenTriangle);
        stepParticlesShader.setupAndActive();
        particles.gl.drawArrays(4, 0, 3);
        stepParticlesShader.deactivate();
        particleData.swapBuffers();
      }
      const offscreenTarget = this.postProcessingEnabled ? this.offscreenTarget : null;
      if (offscreenTarget == null) {
        this.gl.viewport(0, 0, this.drawingBufferWidth, this.drawingBufferHeight);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.screenBuffer);
      } else {
        this.gl.viewport(0, 0, offscreenTarget.width, offscreenTarget.height);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, offscreenTarget.frameBufferObject);
      }
      this.gl.clearColor(0, 0, 0, 1);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);
      if (this.remapFluidColor) {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.screenTriangle);
        this.renderFluidShader.texture.dirty = true;
        this.renderFluidShader.texture.data = this.fluid.surfaceRenderTarget.readFromTexture!.native;
        this.renderFluidShader.viewportAspectRatio.dirty = true;
        this.renderFluidShader.viewportAspectRatio.data = this.drawingBufferWidth / this.drawingBufferHeight;
        const renderFluidShader = this.renderFluidShader;
        renderFluidShader.setupAndActive();
        this.gl.drawArrays(4, 0, 3);
        this.renderFluidShader.deactivate();
      } else {
        const native = this.fluid.surfaceRenderTarget.readFromTexture!.native;
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.screenTriangle);
        this.screenTextureShader.texture.dirty = true;
        this.screenTextureShader.texture.data = native;
        this.screenTextureShader.setupAndActive();
        this.gl.drawArrays(4, 0, 3);
        this.screenTextureShader.deactivate();
      }
      if (this.postProcessingEnabled) {
        const bloomFilter = this.bloomFilter;
        const otTexture = this.offscreenTarget.texture;
        const target = Math.floor(Tools.log2(Math.max(otTexture.width, otTexture.height) / bloomFilter.downsampleSize));
        if (bloomFilter.downsampleChain != null && bloomFilter.downsampleChain.count != target) {
          bloomFilter.downsampleChain.releaseGPUMemory();
          bloomFilter.downsampleChain = null;
        }
        if (bloomFilter.downsampleChain == null && target > 0) {
          bloomFilter.downsampleChain = new XApplyCount(bloomFilter.gl, target);
        }
        const downSampleChainApply = bloomFilter.downsampleChain != null ? bloomFilter.downsampleChain.apply(otTexture) : otTexture;
        const prevTarget = 1 << target;
        const dWidth = bloomFilter.blurKernelNormalized * otTexture.width / prevTarget;
        const dHeight = bloomFilter.blurKernelNormalized * otTexture.height / prevTarget;
        if (bloomFilter.blur != null && (bloomFilter.blur.kernelX != dWidth || bloomFilter.blur.kernelY != dHeight)) {
          bloomFilter.blur.releaseGPUMemory();
          bloomFilter.blur = null;
        }
        if (bloomFilter.blur == null && (dWidth > 1 || dHeight > 1)) {
          bloomFilter.blur = new XApplyBlur(bloomFilter.gl, dWidth, dHeight);
        }
        const blurApply = bloomFilter.blur !== null ? bloomFilter.blur.apply(downSampleChainApply) : downSampleChainApply;
        if (!blurApply) {
          console.error("blurApply is null")
          return false
        }
        this.gl.viewport(0, 0, this.drawingBufferWidth, this.drawingBufferHeight);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.screenBuffer);
        this.gl.clearColor(0, 0, 0, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        const native = blurApply.native;
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.screenTriangle);
        this.screenTextureShader.texture.dirty = true;
        this.screenTextureShader.texture.data = native;
        const screenTextureShader = this.screenTextureShader;
        screenTextureShader.setupAndActive();
        this.gl.drawArrays(4, 0, 3);
        this.screenTextureShader.deactivate();
      }
      if (this.renderParticlesEnabled) {
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.DST_COLOR, this.gl.SRC_COLOR);
        this.gl.blendEquation(this.gl.FUNC_ADD);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.particles.particleUVs);
        this.renderParticlesShader.particleData.dirty = true;
        this.renderParticlesShader.particleData.data = this.particles.particleData!.readFromTexture!.native;
        this.renderParticlesShader.setupAndActive();
        this.gl.drawArrays(0, 0, this.particles!.count);
        this.renderParticlesShader!.deactivate();
        this.gl.disable(3042);
      }
      if (this.showDebugTextures) {
        // if (this.debugTextureBL) {
        //   this.gl.viewport(0, 0, this.drawingBufferWidth * 0.25 | 0, this.drawingBufferHeight * 0.25 | 0);
        //   this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.screenBuffer);
        //   native = this.debugTextureBL.native;
        //   this.gl.bindBuffer(34962, this.screenTriangle);
        //   this.screenTextureShader.texture.dirty = true;
        //   this.screenTextureShader.texture.data = native;
        //   const screenTextureShader = this.screenTextureShader;
        //   if (screenTextureShader._active) {
        //     let idx = 0;
        //     const uniforms = screenTextureShader._uniforms;
        //     while (idx < uniforms.length) {
        //       const uniform = uniforms[idx];
        //       ++idx;
        //       if (uniform.dirty || uniform.alwaysDirty) {
        //         uniform.apply();
        //       }
        //     }
        //     let size = 0;
        //     idx = 0;
        //     while (idx < screenTextureShader._attributes.length) {
        //       const curAttr = screenTextureShader._attributes[idx++];
        //       const loc = curAttr.location;
        //       if (loc !== -1) {
        //         screenTextureShader.gl.enableVertexAttribArray(loc);
        //         screenTextureShader.gl.vertexAttribPointer(loc, curAttr.itemCount, curAttr.type, false, screenTextureShader._aStride, size);
        //       }
        //       size += curAttr.byteSize;
        //     }
        //   } else {
        //     if (!screenTextureShader._ready) {
        //       screenTextureShader.create();
        //     }
        //     screenTextureShader.gl.useProgram(screenTextureShader._prog);
        //     let idx = 0;
        //     const uniforms = screenTextureShader._uniforms;
        //     while (idx < uniforms.length) {
        //       const uniform = uniforms[idx];
        //       ++idx;
        //       if (uniform.dirty || uniform.alwaysDirty) {
        //         uniform.apply();
        //       }
        //     }
        //     let size = 0;
        //     idx = 0;
        //     while (idx < screenTextureShader._attributes.length) {
        //       const curAttr = screenTextureShader._attributes[idx++];
        //       const loc = curAttr.location;
        //       if (loc !== -1) {
        //         screenTextureShader.gl.enableVertexAttribArray(loc);
        //         screenTextureShader.gl.vertexAttribPointer(loc, curAttr.itemCount, curAttr.type, false, screenTextureShader._aStride, size);
        //       }
        //       size += curAttr.byteSize;
        //     }
        //     screenTextureShader._active = true;
        //   }
        //   this.gl.drawArrays(4, 0, 3);
        //   this.screenTextureShader.deactivate();
        // }
        // if (this.debugTextureBR) {
        //   this.gl.viewport(this.drawingBufferWidth - this.drawingBufferWidth * 0.25 | 0, 0, this.drawingBufferWidth * 0.25 | 0, this.drawingBufferHeight * 0.25 | 0);
        //   this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.screenBuffer);
        //   native = this.debugTextureBR.native;
        //   this.gl.bindBuffer(34962, this.screenTriangle);
        //   this.screenTextureShader.texture.dirty = true;
        //   this.screenTextureShader.texture.data = native;
        //   const screenTextureShader = this.screenTextureShader;
        //   if (screenTextureShader._active) {
        //     let idx = 0;
        //     const uniforms = screenTextureShader._uniforms;
        //     while (idx < uniforms.length) {
        //       const unifrom = uniforms[idx];
        //       ++idx;
        //       if (unifrom.dirty || unifrom.alwaysDirty) {
        //         unifrom.apply();
        //       }
        //     }
        //     let size = 0;
        //     idx = 0;
        //     while (idx < screenTextureShader._attributes.length) {
        //       const curAttr = screenTextureShader._attributes[idx++];
        //       const loc = curAttr.location;
        //       if (loc !== -1) {
        //         screenTextureShader.gl.enableVertexAttribArray(loc);
        //         screenTextureShader.gl.vertexAttribPointer(loc, curAttr.itemCount, curAttr.type, false, screenTextureShader._aStride, size);
        //       }
        //       size += curAttr.byteSize;
        //     }
        //   } else {
        //     if (!screenTextureShader._ready) {
        //       screenTextureShader.create();
        //     }
        //     screenTextureShader.gl.useProgram(screenTextureShader._prog);
        //     let dix = 0;
        //     const uniforms = screenTextureShader._uniforms;
        //     while (dix < uniforms.length) {
        //       const uniform = uniforms[dix];
        //       ++dix;
        //       if (uniform.dirty || uniform.alwaysDirty) {
        //         uniform.apply();
        //       }
        //     }
        //     let size = 0;
        //     dix = 0;
        //     while (dix < screenTextureShader._attributes.length) {
        //       const curAttr = screenTextureShader._attributes[idx++];
        //       const loc = curAttr.location;
        //       if (loc !== -1) {
        //         screenTextureShader.gl.enableVertexAttribArray(loc);
        //         screenTextureShader.gl.vertexAttribPointer(loc, curAttr.itemCount, curAttr.type, false, screenTextureShader._aStride, size);
        //       }
        //       size += curAttr.byteSize;
        //     }
        //     screenTextureShader._active = true;
        //   }
        //   this.gl.drawArrays(4, 0, 3);
        //   this.screenTextureShader.deactivate();
        // }
        // if (this.debugTextureTL != null) {
        //   this.gl.viewport(0, this.drawingBufferHeight - this.drawingBufferHeight * 0.25 | 0, this.drawingBufferWidth * 0.25 | 0, this.drawingBufferHeight * 0.25 | 0);
        //   this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.screenBuffer);
        //   native = this.debugTextureTL.native;
        //   this.gl.bindBuffer(34962, this.screenTriangle);
        //   this.screenTextureShader.texture.dirty = true;
        //   this.screenTextureShader.texture.data = native;
        //   const screenTextureShader = this.screenTextureShader;
        //   if (screenTextureShader._active) {
        //     let idx = 0;
        //     const uniforms = screenTextureShader._uniforms;
        //     while (idx < uniforms.length) {
        //       const uniform = uniforms[idx];
        //       ++idx;
        //       if (uniform.dirty || uniform.alwaysDirty) {
        //         uniform.apply();
        //       }
        //     }
        //     let size = 0;
        //     idx = 0;
        //     while (idx < screenTextureShader._attributes.length) {
        //       const curAttr = screenTextureShader._attributes[idx++];
        //       const loc = curAttr.location;
        //       if (loc !== -1) {
        //         screenTextureShader.gl.enableVertexAttribArray(loc);
        //         screenTextureShader.gl.vertexAttribPointer(loc, curAttr.itemCount, curAttr.type, false, screenTextureShader._aStride, size);
        //       }
        //       size += curAttr.byteSize;
        //     }
        //   } else {
        //     if (!screenTextureShader._ready) {
        //       screenTextureShader.create();
        //     }
        //     screenTextureShader.gl.useProgram(screenTextureShader._prog);
        //     let idx = 0;
        //     const uniforms = screenTextureShader._uniforms;
        //     while (idx < uniforms.length) {
        //       const uniform = uniforms[idx];
        //       ++idx;
        //       if (uniform.dirty || uniform.alwaysDirty) {
        //         uniform.apply();
        //       }
        //     }
        //     let size = 0;
        //     idx = 0;
        //     while (idx < screenTextureShader._attributes.length) {
        //       const curAttr = screenTextureShader._attributes[idx++];
        //       const loc = curAttr.location;
        //       if (loc !== -1) {
        //         screenTextureShader.gl.enableVertexAttribArray(loc);
        //         screenTextureShader.gl.vertexAttribPointer(loc, curAttr.itemCount, curAttr.type, false, screenTextureShader._aStride, size);
        //       }
        //       size += curAttr.byteSize;
        //     }
        //     screenTextureShader._active = true;
        //   }
        //   this.gl.drawArrays(4, 0, 3);
        //   this.screenTextureShader.deactivate();
        // }
        // if (this.debugTextureTR != null) {
        //   this.gl.viewport(this.drawingBufferWidth - this.drawingBufferWidth * 0.25 | 0, this.drawingBufferHeight - this.drawingBufferHeight * 0.25 | 0, this.drawingBufferWidth * 0.25 | 0, this.drawingBufferHeight * 0.25 | 0);
        //   this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.screenBuffer);
        //   native = this.debugTextureTR.native;
        //   this.gl.bindBuffer(34962, this.screenTriangle);
        //   this.screenTextureShader.texture.dirty = true;
        //   this.screenTextureShader.texture.data = native;
        //   const screenTextureShader = this.screenTextureShader;
        //   if (screenTextureShader._active) {
        //     let idx = 0;
        //     const uniforms = screenTextureShader._uniforms;
        //     while (idx < uniforms.length) {
        //       const unifrom = uniforms[idx];
        //       ++idx;
        //       if (unifrom.dirty || unifrom.alwaysDirty) {
        //         unifrom.apply();
        //       }
        //     }
        //     let size = 0;
        //     idx = 0;
        //     while (idx < screenTextureShader._attributes.length) {
        //       const curAttr = screenTextureShader._attributes[idx++];
        //       const loc = curAttr.location;
        //       if (loc !== -1) {
        //         screenTextureShader.gl.enableVertexAttribArray(loc);
        //         screenTextureShader.gl.vertexAttribPointer(loc, curAttr.itemCount, curAttr.type, false, screenTextureShader._aStride, size);
        //       }
        //       size += curAttr.byteSize;
        //     }
        //   } else {
        //     if (!screenTextureShader._ready) {
        //       screenTextureShader.create();
        //     }
        //     screenTextureShader.gl.useProgram(screenTextureShader._prog);
        //     let idx = 0;
        //     const unifroms = screenTextureShader._uniforms;
        //     while (idx < unifroms.length) {
        //       const unifrom = unifroms[idx];
        //       ++idx;
        //       if (unifrom.dirty || unifrom.alwaysDirty) {
        //         unifrom.apply();
        //       }
        //     }
        //     let size = 0;
        //     idx = 0;
        //     while (idx < screenTextureShader._attributes.length) {
        //       const curAttr = screenTextureShader._attributes[idx++];
        //       const loc = curAttr.location;
        //       if (loc !== -1) {
        //         screenTextureShader.gl.enableVertexAttribArray(loc);
        //         screenTextureShader.gl.vertexAttribPointer(loc, curAttr.itemCount, curAttr.type, false, screenTextureShader._aStride, size);
        //       }
        //       size += curAttr.byteSize;
        //     }
        //     screenTextureShader._active = true;
        //   }
        //   this.gl.drawArrays(4, 0, 3);
        //   this.screenTextureShader.deactivate();
        // }
      }
    }
  }
  particles!: XParticlesCount
  initializeParticles() {
    this.particles = new XParticlesCount(this.gl, this.particleCount);
    const a = this.fluid;
    if (!a) {
      console.error("fluid is null")
      return
    }
    (this.particles.stepParticlesShader.flowScale?.data as Float32Array)[0] = 1 / (a.physicsScale * a.aspectRatio);
    (this.particles.stepParticlesShader.flowScale?.data as Float32Array)[1] = 1 / a.physicsScale;
    if (!this.particles.stepParticlesShader.dragCoefficient) {
      console.info("dragCoefficient is null")
      return
    }
    this.particles.stepParticlesShader.dragCoefficient.dirty = true
    this.particles.stepParticlesShader.dragCoefficient.data = 1;
  }
  reset() {
    const fluid = this.fluid;
    const targets = [fluid.velocityRenderTarget, fluid.pressureRenderTarget, fluid.surfaceRenderTarget]
    targets.forEach(target => {
      target.gl.bindFramebuffer(this.gl.FRAMEBUFFER, target.readFrameBufferObject);
      target.gl.viewport(0, 0, target.width, target.height);
      target.gl.clearColor(0, 0, 0, 1);
      target.gl.clear(target.gl.COLOR_BUFFER_BIT);
      target.gl.bindFramebuffer(this.gl.FRAMEBUFFER, target.writeFrameBufferObject);
      target.gl.viewport(0, 0, target.width, target.height);
      target.gl.clearColor(0, 0, 0, 1);
      target.gl.clear(target.gl.COLOR_BUFFER_BIT);
    });

    if (this.particles != null) {
      const particles = this.particles;
      const shader = particles.initialConditionsShader;
      const particleData = particles.particleData!;
      particles.gl.viewport(0, 0, particleData.width, particleData.height);
      particles.gl.bindFramebuffer(this.gl.FRAMEBUFFER, particleData.writeFrameBufferObject);
      particles.gl.bindBuffer(34962, particles.screenTriangle);
      shader.setupAndActive();
      particles.gl.drawArrays(4, 0, 3);
      shader.deactivate();
      particleData.swapBuffers();
    }
  }
  onPointerDown(key: number, type: number,
                x: number, y: number,
                buttonState: number,
                _i: number,
                pressure: number, radius: number,
                angle: number,
                altitudeAngle: number, azimuthAngle: number) {
    this.activePointers.content.set(String(key), new XActionPoint(type, x, y, buttonState, pressure, radius, angle, altitudeAngle, azimuthAngle));
  }
  onPointerChange(key: number, type: number,
                  x: number, y: number,
                  buttonState: number,
                  _i: number,
                  pressure: number, radius: number,
                  angle: number,
                  altitudeAngle: number, azimuthAngle: number) {
    const m = this.activePointers.content.get(String(key));
    if (m) {
      m.type = type;
      m.x = x;
      m.y = y;
      m.buttonState = buttonState;
      m.pressure = pressure;
      m.radius = radius;
      m.angle = angle;
      m.altitudeAngle = altitudeAngle;
      m.azimuthAngle = azimuthAngle;
    }
  }
  onPointerUp(key: number) {
    this.activePointers.remove(String(key));
    this.activePointersLastFrame.remove(String(key));
  }
}
