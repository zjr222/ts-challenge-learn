export type StringToNumber<
    S extends string,
    Arr extends unknown[] = []
    > = S extends `${number}`
    ? S extends `${Arr["length"]}`
    ? Arr["length"]
    : StringToNumber<S, [...Arr, unknown]>
    : never;

type cases = StringToNumber<"12546S455">; // 254647

// Result : ❌