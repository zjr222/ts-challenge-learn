// 合并联合类型 UnionToIntersection.ts

import { ArrToObj } from "../utils/ArrToObj";

type ModelEntries =
    | ["name", string]
    | ["age", number]
    | ["locations", string[] | null];

export type UnionToIntersection<T> = (
    T extends T ? (x: T) => void : never
) extends (x: infer R) => void
    ? R
    : never;

type cases = UnionToIntersection<ArrToObj<ModelEntries>>

// Result : ❌
