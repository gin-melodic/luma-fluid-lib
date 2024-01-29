import { XOptionalString } from "./XOptionalString.ts";
export declare class XBracket {
    closeBracket: string;
    openBracket: string;
    contents: string | XOptionalString[] | XBracket[];
    constructor(str?: string);
    toString(): string;
}
