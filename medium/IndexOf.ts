import { Add } from "../utils/Add";
import { Equal } from "../utils//Equal";

// self Result
// export type IndexOf<
//   T extends number[],
//   K extends number,
//   N extends number = 0,
//   Byte extends number = 1
// > = T[N] extends K
//   ? N
//   : N extends T["length"]
//   ? -1
//   : IndexOf<T, K, Add<N, Byte>, Byte>;



// offical Result
type IndexOf<T, U, R extends unknown[] = []> = T extends [
    infer First,
    ...infer Rest
]
    ? Equal<U, First> extends true
    ? R["length"]
    : IndexOf<Rest, U, [...R, unknown]>
    : -1;


type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res1 = IndexOf<[2, 6, 1, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1

// Result : ✅