import { XBracket } from "./XBracket.ts";
export declare class XOptionalString {
    contents: string | XOptionalString[] | XBracket[];
    constructor(str?: string);
    toString: () => string;
}
