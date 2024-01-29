import { XKeys } from "./XKeys.ts";
export declare class XDict<T> {
    content: Map<string, T>;
    get(key: string): T | undefined;
    keys(): XKeys<T>;
}
