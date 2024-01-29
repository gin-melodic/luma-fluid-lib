export declare class XRegExp extends RegExp {
    matched: RegExpExecArray | null;
    original: string;
    constructor(pattern: RegExp | string, flags?: string);
}
export declare class RegExpHelper {
    reg: XRegExp;
    constructor(str: string, seg: string);
    match(str: string): boolean;
    matched(index: number): string;
    matchedRight(): string;
    matchedPos(): {
        pos: number;
        len: number;
    };
    matchSub(str: string, index: number, len?: number): boolean;
}
