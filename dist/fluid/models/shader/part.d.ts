import { XShaderBase } from "./base.ts";
import { XUniformArray, XUniformTexture } from "../XUniform.ts";
import { XAttribute } from "../XAttribute.ts";
export type TypeShaderPart = {
    varyingDeclarations: string[];
    varyingValues: string[];
    textureSamples: string[];
};
export declare class XPartShader extends XShaderBase {
    direction: Float32Array;
    kernel: number;
    shaderParts: TypeShaderPart;
    invResolution: XUniformArray;
    texture: XUniformTexture;
    vertexPosition: XAttribute;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, direction: Float32Array, kernel: number);
    generateShaderParts(): {
        varyingDeclarations: string[];
        varyingValues: string[];
        textureSamples: string[];
    };
    nearestBestKernel(kernel: number): number;
    gaussianWeight(e: number): number;
    glslFloat(e: number): string;
    createProperties(): void;
    initSources(): void;
}
