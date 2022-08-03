type EmptyRight = " " | "\n" | "\t";

type AddString<A extends string, B extends string> = `${A}${B}`;

export type TrimRight<

    S extends string,

    Rest extends string = ""

    > = S extends `${infer A}${infer B}`

    ? B extends EmptyRight

    ? Rest

    : TrimRight<B, AddString<Rest, A>>

    : never;

type trimedRight = TrimRight<" HSOPPPS SS  ">; // 应推导出 ' HSOPPPS SS'