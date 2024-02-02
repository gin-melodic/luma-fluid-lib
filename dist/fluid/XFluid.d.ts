import React from "react";
import { IFluidSettings } from "./render/Settings.ts";
interface XFluidProps {
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    logoSrc: string;
    textureSrc: string;
    settings?: IFluidSettings;
    onError?: (error: Error) => void;
}
export declare const XFluid: (prop: XFluidProps) => import("react/jsx-runtime").JSX.Element;
export {};
