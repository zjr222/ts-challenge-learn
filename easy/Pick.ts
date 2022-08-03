interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

export type MyPick<T, K> = {
    [P in keyof T as P extends K ? P : never]: T[P];
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};

// Result : ✅