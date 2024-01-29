import { XTextureBase, XWarpFormatter } from "../models/texture/base.ts";
import { XTexture } from "../models/texture/texture.ts";
export declare class XRenderTargetBase {
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    width: number;
    height: number;
    textureParameters: XTextureBase;
    textureFactory: ((gl: WebGLRenderingContext | WebGL2RenderingContext, width: number, height: number) => XTexture) | undefined;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, width: number, height: number, textureParameters: XTextureBase, textureFactory?: (gl: WebGLRenderingContext | WebGL2RenderingContext, width: number, height: number) => XTexture);
    createEmptyTexture(width: number, height: number): XTexture;
    activate(): void;
    updateTextureParameters(textureBase: XWarpFormatter): void;
}
export declare class XRenderTarget extends XRenderTargetBase {
    writeFrameBufferObject: WebGLFramebuffer | null;
    readFrameBufferObject: WebGLFramebuffer | null;
    readFromTexture: XTexture | null;
    writeToTexture: XTexture | null;
    tmpFBO: WebGLFramebuffer | null;
    tmpTex: XTexture | null;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, width: number, height: number, textureParameters: XTextureBase, textureFactory?: (gl: WebGLRenderingContext | WebGL2RenderingContext, width: number, height: number) => XTexture);
    activate(): void;
    protected fillTexture(width: number, height: number): void;
    resize(width: number, height: number): this;
    updateTextureParameters(textureBase: XWarpFormatter): void;
    swapBuffers(): void;
}
export declare class XDiverRenderTarget extends XRenderTargetBase {
    frameBufferObject: WebGLFramebuffer | null;
    texture: XTexture;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, width: number, height: number, textureParameters: XTextureBase, textureFactory?: (gl: WebGLRenderingContext | WebGL2RenderingContext, width: number, height: number) => XTexture);
    protected fillTexture(width: number, height: number): void;
    resize(width: number, height: number): this;
    activate(): void;
    updateTextureParameters(textureBase: XWarpFormatter): void;
}
