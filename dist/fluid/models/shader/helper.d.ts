import { XResampleShader } from "./resample.ts";
import { XDict } from "../XDict.ts";
import { XTexture } from "../texture/texture.ts";
import { XPartShader } from "./part.ts";
export declare class ShaderHelperElement {
    shaderMap: XDict<XPartShader>;
    screenTriangle: WebGLBuffer | null;
    nullTexture: XTexture | null;
    resample: XResampleShader | null;
    unitQuad: object | null;
    gl: WebGL2RenderingContext | WebGLRenderingContext | null;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext | null, unitQuad: object | null, screenTriangle: WebGLBuffer | null, resample: XResampleShader | null, nullTexture: XTexture | null, shaderMap: XDict<XPartShader> | null);
}
export declare class ShadeHelper {
    static resources: ShaderHelperElement;
    static getScreenTriangle(gl: WebGL2RenderingContext | WebGLRenderingContext): WebGLBuffer;
    static getResampleShader(gl: WebGL2RenderingContext | WebGLRenderingContext): XResampleShader;
    static getNullTexture(gl: WebGL2RenderingContext | WebGLRenderingContext): XTexture;
    static getShaderWithKey(gl: WebGL2RenderingContext | WebGLRenderingContext, key: string, action: (gl: WebGL2RenderingContext | WebGLRenderingContext, key: string) => XPartShader): XPartShader;
}
