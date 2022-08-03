// 思路 => any本质含义  0 ！== 1 ，但是 0 可以 extends any

export type IsAny<T> = 0 extends 1 & T ? true : false;

type cases = IsAny<any>;

// Result : ✅