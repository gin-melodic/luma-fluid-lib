export declare class XKeys<T> {
    content: Map<string, T>;
    keys: string[];
    length: number;
    current: number;
    constructor(content: Map<string, T>);
    hasNext(): boolean;
    next(): string;
}
