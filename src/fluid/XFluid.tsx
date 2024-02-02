import React, {useRef, useState} from "react";
import {Fluid} from "./fluid";
import {IFluidSettings} from "./render/Settings.ts";

interface XFluidProps {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  // logo image may prue black words and transparent background, edge feathering is recommended
  logoSrc: string;
  // texture image may be a 2D texture
  textureSrc: string;
  settings?: IFluidSettings
  onError?: (error: Error) => void;
}

export const XFluid = (prop: XFluidProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [gl, setGl] = useState<WebGL2RenderingContext | undefined>()

  React.useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      prop.onError?.(new Error("Canvas not found"))
      return
    }
    const gl = canvas.getContext("webgl2")
    if (!gl) {
      prop.onError?.(new Error("WebGL2 not supported"))
      return
    }
    setGl(gl)
    new Fluid(canvas, gl, prop.logoSrc, prop.textureSrc, prop.settings)
  }, [gl, prop])

  return (
    <canvas id="xfluid" ref={canvasRef}
            width={prop.width || 500}
            height={prop.height || 500}
            style={{width: '100%', height: '100%', backgroundColor: 'black', ...prop.style}}></canvas>
  )
}
