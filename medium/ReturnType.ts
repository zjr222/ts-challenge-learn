const fn = (v: boolean) => {
    if (v) return 1;
    else return 2;
};

const a = typeof fn;
type MyReturnType<T> = T extends (...args: unknown[]) => infer R ? R : never;



type a = MyReturnType<typeof fn>; // 应推导出 "1 | 2"

// Result : ❌