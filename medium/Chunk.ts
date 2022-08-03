export type Chunk<
    T extends any[],
    S extends number,
    L extends any[] = []
    > = T extends [infer Head, ...infer Rest]
    ? L["length"] extends S
    ? [L, ...Chunk<T, S, []>]
    : [...Chunk<Rest, S, [...L, Head]>]
    : L extends []
    ? []
    : [L];

type exp1 = Chunk<[1, 2, 3], 2>; // expected to be [[1, 2], [3]]

type exp2 = Chunk<[1, 2, 3], 4>; // expected to be [[1, 2, 3]]

type exp3 = Chunk<[1, 2, 3], 1>; // expected to be [[1], [2], [3]]


// Result : ❌