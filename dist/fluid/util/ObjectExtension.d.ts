export declare const ObjectExtension: {
    nativeClassName: (obj: unknown) => string | null;
    isNativeObject: (obj: unknown) => boolean;
    instanceof: (obj: unknown, cls: any) => boolean;
    cast: (obj: unknown, cls: any) => unknown;
};
