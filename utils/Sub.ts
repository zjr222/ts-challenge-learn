import { ToArray } from "./ToArray";

/**
 * @desc 默认前面小于后面的数字
 */
export type Sub<T extends number, K extends number> = ToArray<K> extends [
    ...ToArray<T>,
    ...infer Rest
]
    ? Rest["length"]
    : never;

type cases = Sub<2, 4>;