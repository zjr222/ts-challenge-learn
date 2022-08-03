type MyCapitalize<S extends string> = S extends `${infer First}${infer Rest}`

    ? `${Uppercase<First>}${Rest}`

    : S;



export type cases = MyCapitalize<"hello world">;

// Result : ✅