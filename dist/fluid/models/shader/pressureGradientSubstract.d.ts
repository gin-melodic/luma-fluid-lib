import { XSurfaceShaderBaseBase } from "./surface.ts";
import { XUniformFloat, XUniformTexture } from "../XUniform.ts";
export declare class XPressureGradientSubtractShader extends XSurfaceShaderBaseBase {
    pressure: XUniformTexture;
    velocity: XUniformTexture;
    halfrdx: XUniformFloat;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    createProperties(): void;
    initSources(): void;
}
