export type PickByType<T, K> = {
    [P in keyof T as T[P] extends K ? P : never]: T[P];
};

type PickBoolean = PickByType<
    {
        name: string;
        count: number;
        isReadonly: boolean;
        isEnable: boolean;
    },

    boolean

>; // {isReadonly: boolean; isEnable: boolean; }