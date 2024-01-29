import { XShaderBase } from "./base.ts";
import { XUniform2fv, XUniform4fv, XUniformArray, XUniformBool, XUniformFloat, XUniformInt, XUniformTexture } from "../XUniform.ts";
import { XAttribute } from "../XAttribute.ts";
export declare class XSurfaceShaderBaseBase extends XShaderBase {
    invResolution: XUniformArray;
    invAspectRatio: XUniformFloat;
    velocityBoundaryEnabled: XUniformBool;
    vertexPosition: XAttribute;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    createProperties(): void;
    initSources(): void;
}
declare class XSurfaceShaderBase extends XSurfaceShaderBaseBase {
    surface: XUniformTexture;
    dt: XUniformFloat;
    dx: XUniformFloat;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    createProperties(): void;
    initSources(): void;
}
export declare class XSurfaceShader extends XSurfaceShaderBase {
    enableUserVelocity?: string;
    decayFactor: XUniformFloat;
    time_s: XUniformFloat;
    userVelocityTexture: XUniformTexture;
    backgroundTexture: XUniformTexture;
    pointerPositions: XUniform4fv;
    pointerData: XUniform2fv;
    activePointerCount: XUniformInt;
    backgroundMultiplier: XUniformFloat;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    set_enableUserVelocity(velocity: string): string;
    createProperties(): void;
    initSources(): void;
}
export {};
