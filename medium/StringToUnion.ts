export type StringToUnion<
    T extends string,
    Rest extends any = never
    > = T extends `${infer A}${infer B}` ? StringToUnion<B, Rest | A> : Rest;


type Result = StringToUnion<"2564">; // expected to be "1" | "2" | "3"

// Result : ✅