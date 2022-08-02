import { Sub } from "./Sub";

/**
 * @desc 前面的数字如果大于后面的数字则为false，反之为true
 */
export type Compare<T extends number, K extends number> = Sub<
    T,
    K
> extends never
    ? false
    : true;

type cases = Compare<4, 2>;