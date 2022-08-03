export type StringJoin<
    T extends string,
    K extends string,
    Rest extends string = ""
    > = K extends `${infer A}${infer B}`
    ? A extends string
    ? B extends ""
    ? StringJoin<T, B, `${Rest}${A}`>
    : StringJoin<T, B, `${Rest}${A}${T}`>
    : never
    : Rest;
type cases = StringJoin<"&", "abcdttasd">;

// Result : ✅