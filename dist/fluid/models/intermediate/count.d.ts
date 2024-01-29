import { XIntermediate } from "./intermediate.ts";
import { XTexture } from "../texture/texture.ts";
import { XConditionsShader } from "../shader/conditionsShader.ts";
import { XStepParticlesShader } from "../shader/stepParticle.ts";
import { XRenderTarget } from "../../render/target.ts";
export declare class XApplyCount {
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    count: number;
    downsampleFilters: XIntermediate[];
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, count: number);
    apply(a: XTexture): XTexture;
    releaseGPUMemory(): void;
}
export declare class XParticlesCount {
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    screenTriangle: WebGLBuffer;
    initialConditionsShader: XConditionsShader;
    stepParticlesShader: XStepParticlesShader;
    particleData: XRenderTarget | null;
    particleUVs: WebGLBuffer | null;
    count: number;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, count?: number);
    setCount(count: number): number;
    printParameters(): void;
}
