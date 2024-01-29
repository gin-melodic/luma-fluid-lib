import { XSurfaceShaderBaseBase } from "./surface.ts";
import { XUniform2fv, XUniform4fv, XUniformArray, XUniformFloat, XUniformInt, XUniformTexture } from "../XUniform.ts";
declare class XUpdateSurfaceBase extends XSurfaceShaderBaseBase {
    velocity: XUniformTexture;
    dt: XUniformFloat;
    dx: XUniformFloat;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    createProperties(): void;
    initSources(): void;
}
export declare class XUpdateForceShader extends XUpdateSurfaceBase {
    time_s: XUniformFloat;
    userVelocityTexture: XUniformTexture;
    lumaLogoTexture: XUniformTexture;
    decayFactor: XUniformFloat;
    dragCoefficient: XUniformFloat;
    dragSpeed: XUniformFloat;
    pointerPositions: XUniform4fv;
    pointerData: XUniform2fv;
    activePointerCount: XUniformInt;
    opticalFlowExponent: XUniformFloat;
    gravity: XUniformArray;
    viewportAspectRatio: XUniformFloat;
    enableUserVelocity?: string;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    set_enableUserVelocity(a: string): string;
    set_enableVelocityBoundary(velocity: string): string;
    createProperties(): void;
    initSources(): void;
}
export {};
