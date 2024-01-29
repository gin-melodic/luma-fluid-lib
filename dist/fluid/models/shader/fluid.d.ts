import { XShaderBase } from "./base.ts";
import { XUniformFloat, XUniformTexture } from "../XUniform.ts";
import { XAttribute } from "../XAttribute.ts";
export declare class XFluidShader extends XShaderBase {
    texture: XUniformTexture;
    lumaLogoTexture: XUniformTexture;
    invGamma: XUniformFloat;
    time_s: XUniformFloat;
    refraction: XUniformFloat;
    chromaticAberration: XUniformFloat;
    innerDarkening: XUniformFloat;
    gradientBackground: XUniformFloat;
    viewportAspectRatio: XUniformFloat;
    vertexPosition: XAttribute;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    createProperties(): void;
    initSources(): void;
}
