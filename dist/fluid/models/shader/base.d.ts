import { IXUniform, XUniformTexture } from "../XUniform.ts";
import { XAttribute } from "../XAttribute.ts";
export declare class XShaderBase {
    _aStride: number;
    protected _textures: XUniformTexture[];
    _attributes: XAttribute[];
    _uniforms: IXUniform[];
    protected _numTextures: number;
    protected _vertSource: string;
    protected _fragSource: string;
    protected _vert: WebGLShader | null;
    protected _frag: WebGLShader | null;
    _prog: WebGLProgram | null;
    protected _name: string;
    _ready: boolean;
    _active: boolean;
    gl: WebGL2RenderingContext | WebGLRenderingContext;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    initSources(): void;
    createProperties(): void;
    create(): void;
    destroy(): void;
    compile(vertexSource: string, fragmentSource: string): void;
    deactivate(): void;
    disableAttributes(): void;
    toString(): string;
    setupAndActive(): void;
}
