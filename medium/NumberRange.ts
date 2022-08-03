import { Add } from "../utils/Add";
import { Sub } from "../utils/Sub";
// self  Result
// export type NumberRange<
//   T extends number,
//   K extends number,

//   Rest extends number[] = [T]

// > = Rest[Sub<1, Rest["length"]>] extends K

//   ? Rest[number]

//   : NumberRange<Add<T, 1>, K, [...Rest, Add<T, 1>]>;

// Result : ✅


// official Result
export type NumberRange<
    T extends number,
    U extends number,
    R extends any[] = [],
    L extends any[] = [],
    S extends any[] = []> = T extends R['length'] ? U extends L['length'] ? S[number] | L['length']
    : NumberRange<T, U, R, [...L, T], [...S, L['length']]>
    : NumberRange<T, U, [...R, T], [...R, T], S>;

type Result = NumberRange<2, 9>

