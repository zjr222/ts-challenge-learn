type Empty = " " | "\n" | "\t";


export type TrimLeft<S extends string> = S extends `${Empty}${infer A}`
    ? TrimLeft<A>
    : S;
type trimed = TrimLeft<" HSOPPPS SS  ">; // 应推导出 'Hello World  '

// Result : ✅