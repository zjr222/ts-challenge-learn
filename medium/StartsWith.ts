export type StartsWith<
    T extends string,
    U extends string
    > = T extends `${U}${infer R}` ? true : false;

type a = StartsWith<"abcd", "abc">; // expected to be true
type b = StartsWith<"abc", "abc">; // expected to be true
type c = StartsWith<"abc", "abcd">; // expected to be false

// Result : ✅