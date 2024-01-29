import { XIntermediateBase } from "./base.ts";
import { XPartShader } from "../shader/part.ts";
import { XTexture } from "../texture/texture.ts";
export declare class XApplyBlur {
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    kernelX: number;
    kernelY: number;
    blurIntermediateXY: XIntermediateBase;
    blurIntermediateX: XIntermediateBase;
    blurShaderX: XPartShader;
    blurShaderY: XPartShader;
    screenTriangle: WebGLBuffer;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, kernelX: number, kernelY: number);
    apply(inputTexture: XTexture, targetTexture?: XTexture, outputTexture?: XTexture): XTexture | undefined;
    releaseGPUMemory(): void;
}
