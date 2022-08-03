type Data = {
    foo: {
        bar: {
            value: "foobar";
            count: 6;
        };
        included: true;
    };
    hello: "world";
};

export type TypedGet<T, K> = K extends `${infer A}.${infer B}`
    ? A extends keyof T
    ? TypedGet<T[A], B>
    : never
    : K extends keyof T
    ? T[K]
    : never;

type A = TypedGet<Data, "hello">; // 'world'
type B = TypedGet<Data, "foo.bar.count">; // 6
type C = TypedGet<Data, "foo.bar">; // { value: 'foobar', count: 6 }

// Result : ✅

