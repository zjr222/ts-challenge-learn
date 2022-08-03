export type EndsWith<
    T extends string,
    U extends string
    > = T extends `${infer R}${U}` ? true : false;


type a = EndsWith<"abcd", "cd">; // expected to be false

type b = EndsWith<"abc", "bc">; // expected to be true

type c = EndsWith<"abc", "abcd">; // expected to be false

// Result : ✅