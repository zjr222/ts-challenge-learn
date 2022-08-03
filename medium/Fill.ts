export type Fill<
    T extends any[],
    K,
    New extends any[] = []
    > = T["length"] extends New["length"] ? New : Fill<T, K, [...New, K]>;


type exp = Fill<[1, 2, 3], 0>; // expected to be [0, 0, 0]

// Result : ✅