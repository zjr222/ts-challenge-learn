export type Split<
    T extends string,
    K extends string,
    Rest extends string[] = []
    > = T extends `${infer G}${K}${infer D}`
    ? Split<D, K, [...Rest, G]>
    : [...Rest, T]; //循环遍历最后 extends的字符串，后保留的就是未匹配到的字符然后拼接 => [...Rest,T]

type result = Split<"Hi! How are you?", " ">;
// should be ['Hi!', 'How', 'are', 'you?']
// Result : ✅