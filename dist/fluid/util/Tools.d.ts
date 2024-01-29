import { XBracket } from "../models/XBracket.ts";
export declare const Tools: {
    substr: (source: string, start?: number, end?: number) => string;
    remove: <T>(list: T[], item: T) => boolean;
    stripComments: (source: string) => string;
    now(): number;
    bracketExplode(str: string, flag: string): XBracket | null;
    compressedToExploded: (bracket: XBracket, targetPos: number) => number;
    injectConstValue: (str: string, _target: string, _seg: string) => string;
    floorPowerOf2: (value: number) => number;
    log2: (value: number) => number;
};
