import { XShaderBase } from "./base.ts";
import { XUniformTexture } from "../XUniform.ts";
import { XAttribute } from "../XAttribute.ts";
declare class XParticlesShaderBase extends XShaderBase {
    particleData: XUniformTexture;
    particleUV: XAttribute;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    createProperties(): void;
    initSources(): void;
}
export declare class XParticlesShader extends XParticlesShaderBase {
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    createProperties(): void;
    initSources(): void;
}
export {};
