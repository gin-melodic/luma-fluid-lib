import { XDict } from "./models/XDict.ts";
import { XBox } from "./models/XBox.ts";
import { FluidRender } from "./render/FluidRender.ts";
declare global {
    interface Window {
        $haxeUID: number;
    }
    interface ActionFunction extends Function {
        __id__: number;
    }
}
export declare class Fluid {
    eventHanders: XDict<object>;
    canvas: HTMLCanvasElement;
    gl: WebGL2RenderingContext;
    lumaLogoPromise: Promise<object> | null;
    lumaLogoTexture: object | null;
    particleCount: number;
    showDebugTextures: boolean;
    postProcessingEnabled: boolean;
    remapFluidColor: boolean;
    renderParticlesEnabled: boolean;
    pointerDataBuffer: Float32Array;
    pointerPositionsBuffer: Float32Array;
    activePointersLastFrame: XBox<number>;
    activePointers: XBox<number>;
    screenBuffer: WebGLFramebuffer | null;
    screenTriangle: null;
    fluid: FluidRender;
    frameLoopHandle: number | null;
    eventHandlers: XDict<object[]>;
    constructor(canvas: HTMLCanvasElement, gl: WebGL2RenderingContext, logoSrc: string, textureSrc: string);
}
