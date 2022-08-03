import { Merge } from "../utils/Merge";

export type Assign<
    T extends Record<string, unknown>,
    U extends any[]
    > = U extends [infer F, ...infer L]
    ? F extends Record<string, unknown>
    ? Assign<Omit<T, keyof F> & F, L>
    : Assign<T, L>
    : Merge<T>;

type Target = {
    a: "a";
};

type Origin1 = {
    b: "b";
    a: "1";
};
type Origin2 = {
    c: "c";
};

type Result = Assign<Target, [Origin1, Origin2]>;

// Result : ✅