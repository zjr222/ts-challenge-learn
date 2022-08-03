export type Push<T extends any[], K extends unknown> = [...T, K];
type Result = Push<[1, 2], "3">; // [1, 2, '3']

// Result : ✅