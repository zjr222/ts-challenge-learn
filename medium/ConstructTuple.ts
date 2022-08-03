import { ToArray } from "../utils/ToArray";



export type ConstructTuple<

    T extends number,

    Arr extends unknown[] = [unknown]

    > = Arr["length"] extends T ? Arr : ToArray<T, [unknown, ...Arr]>;



type result = ConstructTuple<2>; // expect to be [unknown, unkonwn]

// Result : ✅