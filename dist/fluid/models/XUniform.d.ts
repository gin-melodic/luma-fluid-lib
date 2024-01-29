export interface IXUniform {
    alwaysDirty: boolean;
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    name: string;
    location: WebGLUniformLocation | null;
    data: WebGLTexture | Float32Array | null;
    dirty: boolean;
    apply(): void;
}
export type XUniformDataType = WebGLTexture | Float32Array | number | boolean | null;
export declare class XUniform {
    alwaysDirty: boolean;
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    name: string;
    location: WebGLUniformLocation | null;
    data: XUniformDataType;
    dirty: boolean;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, name: string, location: WebGLUniformLocation | null, data: XUniformDataType);
}
export declare class XUniformTexture extends XUniform {
    cube: boolean;
    type: number;
    samplerIndex: number;
    gpuSideValue: number;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, name: string, location: WebGLUniformLocation | null, flag?: boolean);
    apply(): void;
}
export declare class XUniformArray extends XUniform {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, name: string, location: WebGLUniformLocation | null, x?: number, y?: number);
    apply(): void;
}
export declare class XUniformFloat extends XUniform {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, name: string, location: WebGLUniformLocation | null, data?: number);
    apply(): void;
}
export declare class XUniformInt extends XUniform {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, name: string, location: WebGLUniformLocation | null, data?: number);
    apply(): void;
}
export declare class XUniformBool extends XUniform {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, name: string, location: WebGLUniformLocation | null, data?: boolean);
    apply(): void;
}
export declare class XUniform4fv extends XUniform {
    arraySize: number;
    buffer: Float32Array;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, name: string, location: WebGLUniformLocation | null, size: number, buffer?: Float32Array | null);
    apply(): void;
}
export declare class XUniform2fv extends XUniform {
    arraySize: number;
    buffer: Float32Array;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, name: string, location: WebGLUniformLocation | null, size: number, buffer?: Float32Array | null);
    apply(): void;
}
