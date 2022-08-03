export type ArrToObj<T> = T extends T
    ? T extends [infer Key, infer Val]
    ? { [K in Key & string]: Val }
    : never
    : never;

type cases = ArrToObj<["name", string]>;