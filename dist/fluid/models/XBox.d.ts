import { XArray } from "./XArray.ts";
export declare class XBox<T> {
    content: Map<string, T>;
    get(key: string): T | undefined;
    remove(key: string): boolean;
    keys(): XArray<number>;
}
