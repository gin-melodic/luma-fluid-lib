import { XIntermediateBase } from "./base.ts";
import { XTexture } from "../texture/texture.ts";
export declare class XIntermediate {
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    intermediate: XIntermediateBase;
    resampleShader: import("../shader/resample.ts").XResampleShader;
    screenTriangle: WebGLBuffer;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext);
    apply(texture: XTexture, seg?: unknown, addition?: XTexture): XTexture;
    releaseGPUMemory(): void;
}
