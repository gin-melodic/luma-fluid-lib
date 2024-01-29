import {XAttribute} from "../models/XAttribute.ts";

export const ObjectExtension = {

    nativeClassName: (obj: unknown) => {
        const b = {}.toString.call(obj).slice(8, -1);
        if (b === "Object" || b === "Function" || b === "Math" || b === "JSON") {
            return null;
        } else {
            return b;
        }
    },

    isNativeObject: (obj: unknown) => {
        return ObjectExtension.nativeClassName(obj) !== null;
    },


    instanceof: (obj: unknown, cls: any) => {
        if (!cls) { return false; }
        switch (cls) {
            case Array:
                return obj instanceof Array;
            case Boolean:
                return typeof obj === "boolean";
            case Number:
                return typeof obj === "number";
            case String:
                return typeof obj === "string";
            default:
                if (!obj) { return false; }
                if (typeof cls === 'function') {
                    return obj instanceof cls;
                } else if (typeof cls === 'object' && ObjectExtension.isNativeObject(obj) && obj instanceof cls) {
                    return true
                }
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                return cls === XAttribute && obj.__name__ !== null && obj.__ename__ === null
        }
    },

    cast: (obj: unknown, cls: any) => {
        if (!obj || ObjectExtension.instanceof(obj, cls)) { return obj; }
        throw new Error("Cannot cast " + ObjectExtension.nativeClassName(obj) + " to " + ObjectExtension.nativeClassName(cls));
    },
}
