import { XSurfaceShaderBaseBase } from "./surface.ts";
import { XUniformFloat, XUniformTexture } from "../XUniform.ts";
export declare class XDivergenceShader extends XSurfaceShaderBaseBase {
    velocity: XUniformTexture;
    halfrdx: XUniformFloat;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    createProperties(): void;
    initSources(): void;
}
