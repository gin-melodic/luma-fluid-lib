import { XShaderBase } from "./base.ts";
import { XAttribute } from "../XAttribute.ts";
export declare class XConditionsShaderBase extends XShaderBase {
    vertexPosition: XAttribute;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    createProperties(): void;
    initSources(): void;
}
export declare class XConditionsShader extends XConditionsShaderBase {
    createProperties(): void;
    initSources(): void;
}
