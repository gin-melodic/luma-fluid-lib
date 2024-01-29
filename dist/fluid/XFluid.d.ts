import React from "react";
interface XFluidProps {
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    logoSrc: string;
    textureSrc: string;
    onError?: (error: Error) => void;
}
export declare const XFluid: (prop: XFluidProps) => import("react/jsx-runtime").JSX.Element;
export {};
