export type ToArray<
    N extends number,
    Arr extends any[] = []
    > = Arr["length"] extends N ? Arr : ToArray<N, [...Arr, any]>;

type cases = ToArray<5>;

