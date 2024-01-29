import {XResampleShader} from "./resample.ts";
import {XDict} from "../XDict.ts";
import {XTexture} from "../texture/texture.ts";
import {XTextureBase} from "../texture/base.ts";
import {XPartShader} from "./part.ts";

export class ShaderHelperElement {
  shaderMap = new XDict<XPartShader>()
  screenTriangle: WebGLBuffer | null = null
  nullTexture: XTexture | null = null
  resample: XResampleShader | null = null
  unitQuad: object | null = null
  gl: WebGL2RenderingContext | WebGLRenderingContext | null = null

  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext | null,
              unitQuad: object | null, screenTriangle: WebGLBuffer | null,
              resample: XResampleShader | null, nullTexture: XTexture | null, shaderMap: XDict<XPartShader> | null) {
    this.gl = gl ?? this.gl;
    this.unitQuad = unitQuad ?? this.unitQuad;
    this.screenTriangle = screenTriangle ?? this.screenTriangle;
    this.resample = resample ?? this.resample;
    this.nullTexture = nullTexture ?? this.nullTexture;
    this.shaderMap = shaderMap ?? this.shaderMap;
  }
}

// Helper class for shaders
export class ShadeHelper {
  // The static resources
  static resources = new ShaderHelperElement(null, null,
    null, null, null, null)

  // Get the screen triangle buffer
  static getScreenTriangle(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    const res = ShadeHelper.resources
    if (res.screenTriangle === null) {
      // Create a big triangle that covers the screen
      const arr = new Float32Array([0,0,2,0,0,2])
      res.screenTriangle = gl.createBuffer()
      gl.bindBuffer(gl.ARRAY_BUFFER, res.screenTriangle)
      // Bind the data to the buffer
      gl.bufferData(gl.ARRAY_BUFFER, arr, gl.STATIC_DRAW)
      gl.bindBuffer(gl.ARRAY_BUFFER, null)
    }
    return res.screenTriangle!
  }

  static getResampleShader(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    const res = ShadeHelper.resources
    if (res.resample === null) {
      res.resample = new XResampleShader(gl)
    }
    return res.resample
  }

  // Get the placeholder texture
  static getNullTexture(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    const res = ShadeHelper.resources
    if (res.nullTexture === null) {
      // Create a 1x1 texture with a single transparent pixel
      const base = new XTextureBase(gl, null, null, null,
        null, null, null, null)
      res.nullTexture = XTexture.createTexture(gl, 1, 1, base,
        new Uint8Array([0,0,0,0]), null, false)
    }
    return res.nullTexture
  }

  static getShaderWithKey(gl: WebGL2RenderingContext | WebGLRenderingContext, key: string, action: (gl: WebGL2RenderingContext | WebGLRenderingContext, key: string) => XPartShader) {
    const res = ShadeHelper.resources
    let ele = res.shaderMap.get(key)
    if (!ele) {
      ele = action(gl, key)
      res.shaderMap.content.set(key, ele)
    }
    return ele
  }
}
