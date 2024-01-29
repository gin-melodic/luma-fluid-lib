import { XBox } from "../models/XBox.ts";
import { XTexture } from "../models/texture/texture.ts";
import { XFluidShader } from "../models/shader/fluid.ts";
import { XUpdateForceShader } from "../models/shader/update.ts";
import { XTextureShader } from "../models/shader/texture.ts";
import { XParticlesShader } from "../models/shader/particles.ts";
import { XSurfaceShader } from "../models/shader/surface.ts";
import { FluidManager } from "./FluidManager.ts";
import { XDiverRenderTarget } from "./target.ts";
import { XApplyCount, XParticlesCount } from "../models/intermediate/count.ts";
import { XActionPoint } from "../models/XActionPoint.ts";
import { XApplyBlur } from "../models/intermediate/blur.ts";
declare class BloomFilter {
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    blurKernelNormalized: number;
    downsampleSize: number;
    screenTriangle: WebGLBuffer;
    downsampleChain: XApplyCount | null;
    blur: XApplyBlur | null;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, blurKernelNormalized?: number, downsampleSize?: number);
    releaseGPUMemory(): void;
}
export declare class FluidRender {
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    drawingBufferWidth: number;
    drawingBufferHeight: number;
    savedSettings: string | null;
    lumaLogoPromise: Promise<{
        img: HTMLImageElement;
        texture: XTexture;
    }> | null;
    lumaLogoTexture: XTexture | null;
    settings: any;
    particleCount: number;
    showDebugTextures: boolean;
    postProcessingEnabled: boolean;
    remapFluidColor: boolean;
    renderParticlesEnabled: boolean;
    pointerDataBuffer: Float32Array;
    pointerPositionsBuffer: Float32Array;
    activePointersLastFrame: XBox<XActionPoint>;
    activePointers: XBox<XActionPoint>;
    screenBuffer: WebGLFramebuffer | null;
    screenTriangle: WebGLBuffer | null;
    lastTime: number;
    textureSrc: string;
    logoSrc: string;
    renderFluidShader: XFluidShader;
    updateForceShader: XUpdateForceShader;
    hx__closures__: {
        [key: number]: object;
    } | null;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, logoSrc: string, textureSrc: string);
    updateLumaLogo(): void;
    fluid: FluidManager;
    offscreenTarget: XDiverRenderTarget;
    bloomFilter: BloomFilter;
    initializeGPUResources(): void;
    screenTextureShader: XTextureShader;
    renderParticlesShader: XParticlesShader;
    updateSurfaceShader: XSurfaceShader;
    initializeShaders(): void;
    resize(width: number, height: number): false | undefined;
    onFrame(lastTime: number): false | undefined;
    particles: XParticlesCount;
    initializeParticles(): void;
    reset(): void;
    onPointerDown(key: number, type: number, x: number, y: number, buttonState: number, _i: number, pressure: number, radius: number, angle: number, altitudeAngle: number, azimuthAngle: number): void;
    onPointerChange(key: number, type: number, x: number, y: number, buttonState: number, _i: number, pressure: number, radius: number, angle: number, altitudeAngle: number, azimuthAngle: number): void;
    onPointerUp(key: number): void;
}
export {};