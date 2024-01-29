import { XAdvectShader } from "../models/shader/advect.ts";
import { XDivergenceShader } from "../models/shader/divergence.ts";
import { XPressureGradientSubtractShader } from "../models/shader/pressureGradientSubstract.ts";
import { XPressureSolveShader } from "../models/shader/pressureSolve.ts";
import { XDiverRenderTarget, XRenderTarget } from "./target.ts";
import { XSurfaceShader, XSurfaceShaderBaseBase } from "../models/shader/surface.ts";
import { XUpdateForceShader } from "../models/shader/update.ts";
export declare class FluidManager {
    periodicBoundary: boolean;
    advectShader: XAdvectShader;
    divergenceShader: XDivergenceShader;
    pressureSolveShader: XPressureSolveShader;
    pressureGradientSubstractShader: XPressureGradientSubtractShader;
    applyForcesShader: XUpdateForceShader;
    updateSurfaceShader: XSurfaceShader;
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    width: number;
    height: number;
    powerOf2Surface: boolean;
    simulationScale: number;
    solverIterations: number;
    aspectRatio: number;
    physicsScale: number;
    surfaceWidth: number;
    surfaceHeight: number;
    simulationWidth: number;
    simulationHeight: number;
    screenTriangle: WebGLBuffer | undefined;
    surfaceRenderTarget: XRenderTarget;
    velocityRenderTarget: XRenderTarget;
    pressureRenderTarget: XRenderTarget;
    divergenceRenderTarget: XDiverRenderTarget | undefined;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext, width: number, height: number, simulationScale: number, physicsScale: number, solverIterations: number, powerOf2Surface: boolean, applyForcesShader: XUpdateForceShader, updateSurfaceShader: XSurfaceShader);
    updateBaseUniforms(): void;
    printParameters(): void;
    updateTextureSizes(): void;
    setWrapMode(filter: number): void;
    private updateShaderUniforms;
    private processShader;
    step(data: WebGLTexture): void;
    forEachShader(action: (shader: XSurfaceShaderBaseBase) => void): void;
}