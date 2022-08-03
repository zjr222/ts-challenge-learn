export type Concat<T extends any[], K extends any[]> = [...T, ...K];

type cases = Concat<[2, 4, 5], [3, 6]>;

// Result : ✅