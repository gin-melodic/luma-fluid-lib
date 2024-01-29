export declare class XArray<T> {
    current: number;
    array: T[];
    constructor(array: T[]);
    hasNext(): boolean;
    next(): T;
}
