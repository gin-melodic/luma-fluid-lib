import { XSurfaceShaderBaseBase } from "./surface.ts";
import { XUniformFloat, XUniformTexture } from "../XUniform.ts";
export declare class XPressureSolveShader extends XSurfaceShaderBaseBase {
    pressure: XUniformTexture;
    divergence: XUniformTexture;
    alpha: XUniformFloat;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    createProperties(): void;
    initSources(): void;
}
