import {XDict} from "./models/XDict.ts";
import {XBox} from "./models/XBox.ts";
import {FluidRender} from "./render/FluidRender.ts";
import {IFluidSettings} from "./render/Settings.ts";

declare global {
  interface Window {
    $haxeUID: number
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  interface ActionFunction extends Function {
    __id__: number
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
function XTrigger(fluid: FluidRender, action: ActionFunction) {
  let c;
  if (!action) {
    return null
  }
  if (!action.__id__) {
    action.__id__ = window.$haxeUID++;
  }

  if (fluid.hx__closures__ === null) {
    fluid.hx__closures__ = {};
  } else {
    c = fluid.hx__closures__[action.__id__];
  }
  if (!c) {
    c = action.bind(fluid);
    fluid.hx__closures__[action.__id__] = c;
  }
  return c;
}

export class Fluid {
  eventHanders = new XDict<object>()
  canvas: HTMLCanvasElement
  gl: WebGL2RenderingContext
  // savedSettings: Settings = null
  lumaLogoPromise: Promise<object> | null = null
  lumaLogoTexture: object | null = null
  // settings = new Settings()
  particleCount = 65536
  showDebugTextures = false
  postProcessingEnabled = false
  remapFluidColor = true
  renderParticlesEnabled = false
  pointerDataBuffer = new Float32Array(20)
  pointerPositionsBuffer = new Float32Array(40)
  activePointersLastFrame = new XBox<number>()
  activePointers = new XBox<number>()
  screenBuffer: WebGLFramebuffer | null = null
  screenTriangle = null
  fluid: FluidRender
  frameLoopHandle: number | null = null
  eventHandlers: XDict<object[]> = new XDict();


  constructor(canvas: HTMLCanvasElement, gl: WebGL2RenderingContext, logoSrc: string, textureSrc: string, settings?: IFluidSettings) {
    window.$haxeUID |= 0;
    this.canvas = canvas

    // hook state
    this.canvas.addEventListener('webglcontextlost', () => {
      window.location.reload()
    })
    this.canvas.addEventListener('webglcontextrestored', () => {
      window.console.log('webglcontextrestored')
    })

    // init canvas
    canvas.setAttribute('touch-action', 'none')
    this.gl = gl
    this.gl.clearColor(0, 0, 0, 1)
    this.gl.clear(this.gl.COLOR_BUFFER_BIT)
    this.gl.canvas.addEventListener('webglcontextlost', () => {})
    this.gl.canvas.addEventListener('webglcontextrestored', () => {})
    this.screenBuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING)
    this.fluid = new FluidRender(gl, logoSrc, textureSrc, settings)
    let m: (() => void)
    const g = window.devicePixelRatio;
    (m = () => {
      this.fluid.resize(this.canvas.width, this.canvas.height)
      const now = window.performance.now()
      this.fluid.onFrame(now);
      this.frameLoopHandle = window.requestAnimationFrame(m)
    })();
    // Handle gesture
    this.canvas.addEventListener("gesturestart", function (e) {
      e.preventDefault();
      e.stopPropagation();
    }, false);
    this.canvas.addEventListener("gesturechange", function (e) {
      e.preventDefault();
      e.stopPropagation();
    }, false);
    this.canvas.addEventListener("scroll", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;

    // eslint-disable-next-line @typescript-eslint/ban-types
    function triggle(e: Touch & MouseEvent & {webkitForce: boolean}, action: Function) {
      const ek = e.force;
      const h = ek ?? e.webkitForce;
      const a = that.canvas.getBoundingClientRect();
      const i = (e.clientX - a.left) / a.width;
      const j = (e.clientY - a.top) / a.height;
      action(-1, 0, i * gl.drawingBufferWidth, j * gl.drawingBufferHeight, e.buttons, e.button, h != null ? Math.max(h - 1, 0) : 0.5, g * 50, 0, 0, 0);
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    function triggleWithNum(e: MouseEvent & TouchEvent, action: Function, num: number | boolean) {
      if (num) {
        e.preventDefault();
      }
      const i = that.canvas.getBoundingClientRect()
      for (let a = 0, m = e.changedTouches.length; a < m;) {
        const l = e.changedTouches[a++] as TouchInit;
        const n = (l.clientX ?? 0 - i.left) / i.width;
        const o = (l.clientY ?? 0 - i.top) / i.height;
        const q = n * gl.drawingBufferWidth;
        const r = o * gl.drawingBufferHeight;
        action(l.identifier, 1, q, r, 1, 0, l.force, (l.radiusX ?? 0) * g, l.rotationAngle, l.altitudeAngle, l.azimuthAngle);
      }
    }

    function pointerChange(b: Touch & MouseEvent & {webkitForce: boolean}) {
      const currentFluid = that.fluid
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      triggle(b, XTrigger(currentFluid, currentFluid.onPointerChange));
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    function bindEvent(dom: Window | HTMLElement, type: string, listener: Function, options?: boolean | AddEventListenerOptions) {
      if (Object.prototype.hasOwnProperty.call(that.eventHandlers.content, type)) {
        that.eventHandlers.content.get(type)!.push({
          handler: listener,
          options: options
        });
      } else {
        that.eventHandlers.content.set(type, [{
          handler: listener,
          options: options
        }]);
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dom.addEventListener(type, listener, options);
    }
    bindEvent(this.canvas, "mousedown", function (b: Touch & MouseEvent & {webkitForce: boolean}) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      triggle(b, XTrigger(that.fluid, that.fluid.onPointerDown));
    });
    bindEvent(window, "mousemove", pointerChange);
    bindEvent(window, "webkitmouseforcechanged", pointerChange);
    bindEvent(this.canvas, "touchstart", function (a: Touch & MouseEvent & {webkitForce: boolean}) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      triggleWithNum(a, XTrigger(that.fluid, that.fluid.onPointerDown), true);
    }, {
      capture: true,
      passive: false
    });
    bindEvent(window, "touchmove", function (a: MouseEvent & TouchEvent) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      triggleWithNum(a, XTrigger(that.fluid, that.fluid.onPointerChange), true);
    }, {
      capture: true,
      passive: false
    });
    bindEvent(window, "touchforcechange", function (a: MouseEvent & TouchEvent) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      triggleWithNum(a, XTrigger(that.fluidd, that.fluid.onPointerChange), false);
    }, {
      capture: true,
      passive: true
    });
    bindEvent(window, "touchend", function (a: MouseEvent & TouchEvent) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      triggleWithNum(a, XTrigger(that.fluid, that.fluid.onPointerUp), false);
    }, {
      capture: true,
      passive: true
    });
    bindEvent(window, "touchcancel", function (a: MouseEvent & TouchEvent) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      triggleWithNum(a, XTrigger(that.fluid, that.fluid.onPointerUp), false);
    }, {
      capture: true,
      passive: true
    });
    const h = function (e: MouseEvent & TouchEvent) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      window.removeEventListener("mousemove", h);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      triggle(e, XTrigger(that.fluid, that.fluid.onPointerDown));
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    window.addEventListener("mousemove", h);
  }
}
