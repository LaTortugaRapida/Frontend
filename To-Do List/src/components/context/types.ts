export type ToDo = {
    id: number;
    title: string;
    completed: boolean;
};

export type ToDoList = {
    todos: ToDo[];
};

export type ContextType = {
    todos: ToDo[];
    onRemove: (id: number) => void;
    onAdd: (title:string) => void;
    completeToDo: (id:number) => void;
    filter:string;
    setFilter: React.Dispatch<React.SetStateAction<"all" | "active" | "done">>
};
