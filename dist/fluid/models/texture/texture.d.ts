import { XTextureBase, XWarpFormatter } from "./base.ts";
export declare class ResetAlignFilp {
    unpackAlignment: number;
    webGLFlipY: boolean;
    constructor(unpackAlignment?: number, webGLFlipY?: boolean);
}
export declare class XTexture extends XTextureBase {
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    width: number;
    height: number;
    native: WebGLTexture;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, width: number, height: number, native: WebGLTexture, format: number, internalFormat: number | null, dataType: number, magFilter: number, minFilter: number, wrapS: number, wrapT: number);
    static createTextureFromImage(gl: WebGLRenderingContext | WebGL2RenderingContext, pixels: ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap, textureBase?: XTextureBase, alignFlip?: ResetAlignFilp, isGenMipmap?: boolean): XTexture;
    static createTexture(gl: WebGLRenderingContext | WebGL2RenderingContext, width: number, height: number, textureBase?: XTextureBase, pixels?: ArrayBufferView | null, alignFlip?: ResetAlignFilp | null, isGenMipmap?: boolean): XTexture;
    static updateGLTextureParameters(gl: WebGLRenderingContext | WebGL2RenderingContext, texture: WebGLTexture, textureBase: XWarpFormatter): void;
}
