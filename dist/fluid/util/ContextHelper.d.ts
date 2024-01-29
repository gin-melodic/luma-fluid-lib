import { XTextureBase } from "../models/texture/base.ts";
export declare class ContextHelper {
    static capsCache: never[];
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    _contextVersion: {
        es: boolean;
        major: number;
        minor: number;
    } | null;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    static get(gl: WebGL2RenderingContext | WebGLRenderingContext): ContextHelper;
    getContextVersion(): {
        es: boolean;
        major: number;
        minor: number;
    };
    testWritableColorBuffer(textureBase: XTextureBase): boolean;
    getWritableFloatColorBufferParameters(format: 6403 | 33319 | 6407 | 6408, dataType: number | null, filtering: number | null): {
        format: 6408 | 6403 | 33319 | 6407;
        internalFormat: 6408 | 6403 | 33319 | 6407;
        dataType: number;
        filtering: number | null;
    } | {
        format: 6408 | 6403 | 33319 | 6407;
        internalFormat: 33326 | 33328 | 34837 | 34836 | 33325 | 33327 | 34843 | 34842;
        dataType: number;
        filtering: number | null;
    } | null;
}
