export declare class XTextureBase {
    wrapT: number;
    wrapS: number;
    minFilter: number;
    magFilter: number;
    dataType: number;
    internalFormat: number | null;
    format: number;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, format: number | null, internalFormat: number | null, dataType: number | null, magFilter: number | null, minFilter: number | null, wrapS: number | null, wrapT: number | null);
    match(texture: XTextureBase): boolean;
}
export declare class XWarpFormatter {
    wrapT: number | undefined;
    wrapS: number | undefined;
    minFilter: number | undefined;
    magFilter: number | undefined;
    constructor(minFilter: number | null, magFilter: number | null, wrapT: number | null, wrapS: number | null);
}
