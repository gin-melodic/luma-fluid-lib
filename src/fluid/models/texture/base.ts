export class XTextureBase {
  wrapT;
  wrapS;
  minFilter;
  magFilter;
  dataType;
  internalFormat;
  format;
  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext,
              format: number | null,
              internalFormat: number | null,
              dataType: number | null,
              magFilter: number | null,
              minFilter: number | null,
              wrapS: number | null,
              wrapT: number | null)
  {
    this.wrapT = wrapT ?? gl.CLAMP_TO_EDGE;
    this.wrapS = wrapS ?? gl.CLAMP_TO_EDGE;
    this.minFilter = minFilter ?? gl.NEAREST;
    this.magFilter = magFilter ?? gl.NEAREST;
    this.dataType = dataType ?? gl.UNSIGNED_BYTE;
    this.internalFormat = internalFormat ?? null;
    this.format = format ?? gl.RGBA;
  }

  match(texture: XTextureBase) {
    return this.wrapT === texture.wrapT &&
      this.wrapS === texture.wrapS &&
      this.minFilter === texture.minFilter &&
      this.magFilter === texture.magFilter &&
      this.dataType === texture.dataType &&
      this.internalFormat === texture.internalFormat &&
      this.format === texture.format
  }
}


export class XWarpFormatter {
  wrapT;
  wrapS;
  minFilter;
  magFilter;
  constructor(minFilter: number | null,
              magFilter: number | null,
              wrapT: number | null,
              wrapS: number | null,) {
    if (wrapT) { this.wrapT = wrapT }
    if (wrapS) { this.wrapS = wrapS }
    if (minFilter) { this.minFilter = minFilter }
    if (magFilter) { this.magFilter = magFilter }
  }
}
