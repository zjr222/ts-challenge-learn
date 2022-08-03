export type GetKey<T> = T extends T
    ? T extends [infer Key, infer Val]
    ? Key & string
    : never
    : never

type ModelEntries =
    | ["name", string]
    | ["age", number]
    | ["locations", string[] | null];

type cases = GetKey<ModelEntries>
// Result : ❌