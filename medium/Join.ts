
export type Join<
    T extends any[],
    U extends number | string,
    Rest extends string = ""
    > = T extends [infer A extends string, ...infer B]
    ? Join<B, U, Rest extends "" ? A : `${Rest}${U}${A}`>  // Rest extends "" ? A : `${Rest}${U}${A}` 精髓 
    : Rest;



type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'

type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'

type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'

type Res3 = Join<["o"], "u">; // expected to be 'o'

// Result : ✅