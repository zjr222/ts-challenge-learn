import { ToArray } from "./ToArray";

export type Add<T extends number, K extends number> = [
    ...ToArray<T>,
    ...ToArray<K>
]["length"];

type cases = Add<2, 6>;