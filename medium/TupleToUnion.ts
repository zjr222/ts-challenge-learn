export type TupleToUnion<N extends any[]> = N[number];

type cases = TupleToUnion<[2, 3, 4]>

// Result : ✅