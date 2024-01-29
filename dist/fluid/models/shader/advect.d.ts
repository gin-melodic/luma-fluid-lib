import { XSurfaceShaderBaseBase } from "./surface.ts";
import { XUniformFloat, XUniformTexture } from "../XUniform.ts";
export declare class XAdvectShader extends XSurfaceShaderBaseBase {
    velocity: XUniformTexture;
    target: XUniformTexture;
    dt: XUniformFloat;
    rdx: XUniformFloat;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    createProperties(): void;
    initSources(): void;
}
