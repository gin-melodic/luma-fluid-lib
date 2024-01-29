import { XShaderBase } from "./base.ts";
import { XUniformTexture } from "../XUniform.ts";
import { XAttribute } from "../XAttribute.ts";
export declare class XResampleShader extends XShaderBase {
    texture: XUniformTexture;
    vertexPosition: XAttribute;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    createProperties(): void;
    initSources(): void;
}
