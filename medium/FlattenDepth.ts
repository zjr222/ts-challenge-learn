// FlattenDepth.ts

import { Add } from "../utils/Add";
import { Sub } from "../utils/Sub";

/**
 * 数组单个项的数组深度
 */
type DeepLength<T extends any[], Len extends number = 1> = T[0] extends any[]

    ? DeepLength<T[0], Add<Len, 1>>

    : Len;



type casess = DeepLength<[3, 4]>;

/**
 * 扁平数组单个项的数组深度
 */

type DeleteDeep<T extends any[], K extends number> = T[0] extends any[]
    ? Sub<1, K> extends never
    ? T
    : DeleteDeep<T[0], Sub<1, K>>
    : T;
type cases = DeleteDeep<[1, 2, [[[3, 4]]], [[[5, 6]]]], 3>;

export type FlattenDepth<

    T extends any[],

    K extends number,

    Rest extends any[] = []

    > = T extends [infer A, ...infer B]

    ? A extends any[]

    ? Sub<K, DeepLength<A>> extends never | 0

    ? FlattenDepth<B, K, [...Rest, ...DeleteDeep<A, K>]>

    : FlattenDepth<B, K, [...Rest, DeleteDeep<A, K>]>

    : FlattenDepth<B, K, [...Rest, A]>

    : Rest;

type a = FlattenDepth<[1, 2, [[[3, 4]]], [[[5, 6]]]], 0>; // [1, 2, 3, 4, [5]]. flattern 2 times

// type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

// Result : ✅
