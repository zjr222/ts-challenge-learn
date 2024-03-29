type OmitBoolean = OmitByType<
    {
        name: string;
        count: number;
        isReadonly: boolean;
        isEnable: boolean;
    },
    boolean
>; // { name: string; count: number }


export type OmitByType<T, K> = {
    [P in keyof T as T[P] extends K ? never : P]: T[P];
};