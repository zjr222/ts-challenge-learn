interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

export type MyOmit<T, U extends keyof T> = {
    [P in keyof T as P extends U ? never : P]: T[P];
};

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
    completed: false,
};

// Result : ✅
