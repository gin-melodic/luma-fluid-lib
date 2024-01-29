import { XOptionalString } from "./XOptionalString.ts";
export declare class XFold {
    static fold(obj: XOptionalString[], action: (optStr: XOptionalString, str: string) => string, addition: string): string;
}
