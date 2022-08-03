// ObjectFromEntries.ts
import { ArrToObj } from "../utils/ArrToObj";
import { GetKey } from "../medium/GetK";
import { UnionToIntersection } from "../medium/UnionTointersection";

type ModelEntries =
    | ["name", string]
    | ["age", number]
    | ["locations", string[] | null];
// self Result
// export type ObjectFromEntries<T extends [string, unknown]> = T extends [
//   infer A,
//   infer B
// ]
//   ? { [K in A & string]: B } //把类型当成键这样书写
//   : never;


// offical Result
export type ObjectFromEntries<T> = {
    [Key in GetKey<T>]: Key extends keyof UnionToIntersection<ArrToObj<T>>
    ? UnionToIntersection<ArrToObj<T>>[Key]
    : never;
};

type result = ObjectFromEntries<ModelEntries>;

// expected to be Model
interface Model {
    name: string;
    age: number;
    locations: string[] | null;
}

// Result : ✅