export type Equal<T, K> = T extends K ? true : false;

type cases = Equal<"1", "1">;