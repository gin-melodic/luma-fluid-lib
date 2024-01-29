import { XTextureBase } from "../texture/base.ts";
import { XDiverRenderTarget } from "../../render/target.ts";
export declare class XIntermediateBase {
    _currentTarget: XDiverRenderTarget | null;
    get(gl: WebGLRenderingContext | WebGL2RenderingContext, width: number, height: number, textureParameters: XTextureBase): XDiverRenderTarget;
    destroy(): void;
}
