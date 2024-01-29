import {XAdvectShader} from "../models/shader/advect.ts";
import {XDivergenceShader} from "../models/shader/divergence.ts";
import {XPressureGradientSubtractShader} from "../models/shader/pressureGradientSubstract.ts";
import {XPressureSolveShader} from "../models/shader/pressureSolve.ts";
import {ShadeHelper} from "../models/shader/helper.ts";
import {XTextureBase, XWarpFormatter} from "../models/texture/base.ts";
import {XDiverRenderTarget, XRenderTarget} from "./target.ts";
import {ContextHelper} from "../util/ContextHelper.ts";
import {XSurfaceShader, XSurfaceShaderBaseBase} from "../models/shader/surface.ts";
import {XUpdateForceShader} from "../models/shader/update.ts";
import {Tools} from "../util/Tools.ts";
import {XShaderBase} from "../models/shader/base.ts";
import {XUniform} from "../models/XUniform.ts";

export class FluidManager {
  periodicBoundary;
  advectShader;
  divergenceShader;
  pressureSolveShader;
  pressureGradientSubstractShader;
  applyForcesShader;
  updateSurfaceShader;
  gl;
  width;
  height;
  powerOf2Surface;
  simulationScale;
  solverIterations;
  aspectRatio;
  physicsScale;
  surfaceWidth = 0;
  surfaceHeight = 0;
  simulationWidth = 0;
  simulationHeight = 0;
  screenTriangle;
  surfaceRenderTarget!: XRenderTarget;
  velocityRenderTarget!: XRenderTarget;
  pressureRenderTarget!: XRenderTarget;
  divergenceRenderTarget;
  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext,
              width: number,
              height: number,
              simulationScale: number,
              physicsScale: number,
              solverIterations: number,
              powerOf2Surface: boolean,
              applyForcesShader: XUpdateForceShader,
              updateSurfaceShader: XSurfaceShader) {
    this.periodicBoundary = false;
    this.advectShader = new XAdvectShader(gl);
    this.divergenceShader = new XDivergenceShader(gl);
    this.pressureSolveShader = new XPressureSolveShader(gl);
    this.pressureGradientSubstractShader = new XPressureGradientSubtractShader(gl);
    this.applyForcesShader = applyForcesShader;
    this.updateSurfaceShader = updateSurfaceShader;
    this.gl = gl;
    this.width = width;
    this.height = height;
    this.powerOf2Surface = powerOf2Surface;
    this.simulationScale = simulationScale;
    this.solverIterations = solverIterations;
    this.aspectRatio = this.width / this.height;
    this.physicsScale = physicsScale;

    this.updateBaseUniforms();
    this.updateTextureSizes();

    const contextHelper = ContextHelper.get(gl);
    if (this.gl instanceof WebGL2RenderingContext) {
      const bufferRGBAL = contextHelper.getWritableFloatColorBufferParameters(this.gl.RGBA, this.gl.HALF_FLOAT, this.gl.LINEAR);
      const bufferRGL = contextHelper.getWritableFloatColorBufferParameters(this.gl.RG, this.gl.HALF_FLOAT, this.gl.LINEAR);
      const bufferREDN = contextHelper.getWritableFloatColorBufferParameters(this.gl.RED, this.gl.HALF_FLOAT, this.gl.NEAREST);
      if (!bufferRGBAL || !bufferRGL || !bufferREDN) {
        throw new Error("The fluid simulation requires renderable floating point textures but these are not available on this device");
      }
      const h = this.periodicBoundary ? this.gl.REPEAT : this.gl.CLAMP_TO_EDGE;
      this.screenTriangle = ShadeHelper.getScreenTriangle(gl);
      this.surfaceRenderTarget = new XRenderTarget(gl, this.surfaceWidth, this.surfaceHeight, new XTextureBase(this.gl, bufferRGBAL.format, bufferRGBAL.internalFormat, bufferRGBAL.dataType, 9729, 9729, h, h));
      this.velocityRenderTarget = new XRenderTarget(gl, this.simulationWidth, this.simulationHeight, new XTextureBase(this.gl, bufferRGL.format, bufferRGL.internalFormat, bufferRGL.dataType, 9729, 9729, h, h));
      this.pressureRenderTarget = new XRenderTarget(gl, this.simulationWidth, this.simulationHeight, new XTextureBase(this.gl, bufferREDN.format, bufferREDN.internalFormat, bufferREDN.dataType, 9728, 9728, h, h));
      this.divergenceRenderTarget = new XDiverRenderTarget(gl, this.simulationWidth, this.simulationHeight, new XTextureBase(this.gl, bufferREDN.format, bufferREDN.internalFormat, bufferREDN.dataType, 9728, 9728, h, h));
      this.updateBaseUniforms();
      this.printParameters();
    }
  }
  updateBaseUniforms() {
    this.forEachShader((shader) => {
      const ratio = shader.invAspectRatio;
      if (!ratio) { return; }
      const aspectRatio = 1 / this.aspectRatio;
      ratio.dirty = true;
      ratio.data = aspectRatio;
      if (!shader.invResolution || !shader.invResolution.data) { return; }
      (shader.invResolution.data as Float32Array)[0] = 1 / this.simulationWidth;
      (shader.invResolution.data as Float32Array)[1] = 1 / this.simulationHeight;
      shader.invResolution.dirty = true;
      const boundaryEnabled = shader.velocityBoundaryEnabled;
      const boundary = !this.periodicBoundary;
      if (!boundaryEnabled) { return; }
      boundaryEnabled.dirty = true;
      boundaryEnabled.data = boundary;
    });
    this.advectShader.rdx.dirty = true;
    this.advectShader.rdx.data = 1 / this.physicsScale;
    this.divergenceShader.halfrdx.dirty = true;
    this.divergenceShader.halfrdx.data = 1 / this.physicsScale * 0.5;
    this.pressureGradientSubstractShader.halfrdx.dirty = true;
    this.pressureGradientSubstractShader.halfrdx.data = 1 / this.physicsScale * 0.5;
    this.pressureSolveShader.alpha.dirty = true;
    this.pressureSolveShader.alpha.data = -this.physicsScale * this.physicsScale;
    this.applyForcesShader.dx.dirty = true;
    this.applyForcesShader.dx.data = this.physicsScale;
    this.updateSurfaceShader.dx.dirty = true;
    this.updateSurfaceShader.dx.data = this.physicsScale;
  }
  printParameters() {}
  updateTextureSizes() {
    const pWidth = this.powerOf2Surface ? Tools.floorPowerOf2(this.width) : this.width;
    const pHeight = this.powerOf2Surface ? Tools.floorPowerOf2(this.height) : this.height;
    const pWidthScale = Tools.floorPowerOf2(pWidth * this.simulationScale);
    const pHeightScale = Tools.floorPowerOf2(pHeight * this.simulationScale);
    const fitSize = pWidth != this.surfaceWidth || pHeight != this.surfaceHeight;
    const fitScale = pWidthScale != this.simulationWidth || pHeightScale != this.simulationHeight;

    this.surfaceWidth = pWidth;
    this.surfaceHeight = pHeight;
    this.simulationWidth = pWidthScale;
    this.simulationHeight = pHeightScale;

    if (fitSize && this.surfaceRenderTarget) {
      this.surfaceRenderTarget.resize(this.surfaceWidth, this.surfaceHeight);
    }
    if (fitScale && this.velocityRenderTarget) {
      this.velocityRenderTarget.resize(this.simulationWidth, this.simulationHeight);
    }
    if (fitScale && this.pressureRenderTarget) {
      this.pressureRenderTarget.resize(this.simulationWidth, this.simulationHeight);
    }

    if (fitScale && this.divergenceRenderTarget) {
      const divergenceRenderTarget = this.divergenceRenderTarget;
      const simulationWidth = this.simulationWidth;
      const simulationHeight = this.simulationHeight;
      divergenceRenderTarget.resize(simulationWidth, simulationHeight);
    }
    this.updateBaseUniforms();
  }
  setWrapMode(filter: number) {
    if (!this.velocityRenderTarget || !this.pressureRenderTarget || !this.divergenceRenderTarget || !this.surfaceRenderTarget) { return; }
    this.velocityRenderTarget.updateTextureParameters(new XWarpFormatter(null, null, filter, filter));
    this.pressureRenderTarget.updateTextureParameters(new XWarpFormatter(null, null, filter, filter));
    this.divergenceRenderTarget.updateTextureParameters(new XWarpFormatter(null, null, filter, filter));
    this.surfaceRenderTarget.updateTextureParameters(new XWarpFormatter(null, null, filter, filter));
  }
  private updateShaderUniforms(uniform: XUniform, data?: WebGLTexture) {
    uniform.dirty = true
    if (!data) {
      console.error("data is null")
      return
    }
    uniform.data = data
  }

  private processShader(shader: XShaderBase, renderTarget?: XRenderTarget | XDiverRenderTarget) {
    shader.setupAndActive();
    renderTarget?.activate();
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
    shader.deactivate();

    if (renderTarget instanceof XRenderTarget) {
      renderTarget?.swapBuffers();
    }
  }
  step(data: WebGLTexture) {
    this.gl.viewport(0, 0, this.simulationWidth, this.simulationHeight);
    if (!this.screenTriangle) {
      console.error("this.screenTriangle is null")
      return;
    }
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.screenTriangle);

    // Advect Shader
    const advectShader = this.advectShader;
    const velocityRenderTarget = this.velocityRenderTarget;
    this.updateShaderUniforms(advectShader.dt, data);
    this.updateShaderUniforms(advectShader.target, velocityRenderTarget?.readFromTexture?.native);
    this.updateShaderUniforms(advectShader.velocity, this.velocityRenderTarget?.readFromTexture?.native);
    this.processShader(advectShader, velocityRenderTarget);

    // Apply Forces Shader
    if (this.applyForcesShader) {
      const applyForcesShader = this.applyForcesShader;
      this.updateShaderUniforms(applyForcesShader.dt, data);
      this.updateShaderUniforms(applyForcesShader.velocity, this.velocityRenderTarget?.readFromTexture?.native);
      this.processShader(applyForcesShader, this.velocityRenderTarget);
    }

    // Divergence Shader
    const divergenceShader = this.divergenceShader;
    const divergenceRenderTarget = this.divergenceRenderTarget;
    this.updateShaderUniforms(divergenceShader.velocity, this.velocityRenderTarget?.readFromTexture?.native);
    this.processShader(divergenceShader, divergenceRenderTarget);

    // Pressure Solve Shader
    const pressureSolveShader = this.pressureSolveShader;
    for (let i = 0; i < this.solverIterations; i++) {
      this.updateShaderUniforms(pressureSolveShader.divergence, this.divergenceRenderTarget?.texture?.native);
      this.updateShaderUniforms(pressureSolveShader.pressure, this.pressureRenderTarget?.readFromTexture?.native);
      this.processShader(pressureSolveShader, this.pressureRenderTarget);
    }

    // Pressure Gradient Subtract Shader
    const pressureGradientSubtractShader = this.pressureGradientSubstractShader;
    const pressureRenderTarget = this.pressureRenderTarget;
    this.updateShaderUniforms(pressureGradientSubtractShader.pressure, pressureRenderTarget?.readFromTexture?.native);
    this.updateShaderUniforms(pressureGradientSubtractShader.velocity, this.velocityRenderTarget?.readFromTexture?.native);
    this.processShader(pressureGradientSubtractShader, this.velocityRenderTarget);

    // Update Surface Shader
    this.gl.viewport(0, 0, this.surfaceWidth, this.surfaceHeight);
    if (this.updateSurfaceShader) {
      const updateSurfaceShader = this.updateSurfaceShader;
      const surfaceRenderTarget = this.surfaceRenderTarget;
      this.updateShaderUniforms(updateSurfaceShader.dt, data);
      this.updateShaderUniforms(updateSurfaceShader.surface, surfaceRenderTarget?.readFromTexture?.native);
      this.processShader(updateSurfaceShader, surfaceRenderTarget);
    }

    // Final Advect Shader Operation
    const finalAdvectShader = this.advectShader;
    const finalSurfaceRenderTarget = this.surfaceRenderTarget;
    this.updateShaderUniforms(finalAdvectShader.dt, data);
    this.updateShaderUniforms(finalAdvectShader.target, finalSurfaceRenderTarget?.readFromTexture?.native);
    this.updateShaderUniforms(finalAdvectShader.velocity, this.velocityRenderTarget?.readFromTexture?.native);
    this.processShader(finalAdvectShader, finalSurfaceRenderTarget);
  }
  forEachShader(action: (shader: XSurfaceShaderBaseBase) => void) {
    action(this.applyForcesShader);
    action(this.updateSurfaceShader);
    action(this.advectShader);
    action(this.divergenceShader);
    action(this.pressureSolveShader);
    action(this.pressureGradientSubstractShader);
  }
}
