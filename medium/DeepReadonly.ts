// DeepReadonly.ts

type X = {
    x: {
        a: 1;
        b: "hi";
    };
    y: "hey";
};



export type DeepReadonly<T> = {
    readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>;
};


type Todo = DeepReadonly<X>; // should be same as `Expected`

type Expected = {
    readonly x: {
        readonly a: 1;
        readonly b: "hi";
    };
    readonly y: "hey";
};

// Result : ✅