import { useState, type ReactNode } from "react";
import { ToDoContext } from "./todoContext";
import type { ToDo } from "./types";

type Props = {
    children: ReactNode;
};

export const ToDoContextProvider: React.FC<Props> = ({ children }) => {
    const [todos, setTodos] = useState<ToDo[]>([
        { id: 101, title: "Buy groceries", completed: false },
        { id: 102, title: "Finish React homework", completed: false },
        { id: 103, title: "Go for a walk", completed: true },
        { id: 104, title: "Reply to emails", completed: false },
        { id: 105, title: "Clean the apartment", completed: false },
        { id: 106, title: "Read for 30 minutes", completed: true },
        { id: 107, title: "Practice JavaScript", completed: false },
        { id: 108, title: "Prepare dinner", completed: false },
        { id: 109, title: "Plan tomorrow", completed: true },
    ]);

    const [filter, setFilter] = useState<"all" | "active" | "done">("all");

    const removeToDo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const addToDo = (title: string) => {
        const existingTitle = todos.find(
            (t) => t.title.toLowerCase() === title.toLowerCase(),
        );
        if (existingTitle) {
            return;
        }

        setTodos([...todos, { title, completed: false, id: Date.now() }]);
    };

    const completeToDo = (id: number) => {
        setTodos(
            todos.map((t) =>
                t.id === id ? { ...t, completed: !t.completed } : t,
            ),
        );
    };

    return (
        <ToDoContext.Provider
            value={{
                todos,
                onRemove: removeToDo,
                onAdd: addToDo,
                completeToDo,
                filter,
                setFilter,
            }}
        >
            {children}
        </ToDoContext.Provider>
    );
};
