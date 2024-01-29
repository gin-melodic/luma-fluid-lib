import { XConditionsShaderBase } from "./conditionsShader.ts";
import { XUniformArray, XUniformFloat, XUniformTexture } from "../XUniform.ts";
declare class XStepParticlesShaderBase extends XConditionsShaderBase {
    dt: XUniformFloat;
    particleData: XUniformTexture;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    createProperties(): void;
    initSources(): void;
}
export declare class XStepParticlesShader extends XStepParticlesShaderBase {
    dragCoefficient: XUniformFloat;
    flowScale: XUniformArray;
    flowVelocityField: XUniformTexture;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    createProperties(): void;
    initSources(): void;
}
export {};
