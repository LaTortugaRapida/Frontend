import { useContext } from "react";
import { ToDoContext } from "./context/todoContext";
import { ToDoItem } from "./ToDoItem";


export const List = () => {
    const context = useContext(ToDoContext);

    if (!context) {
        throw new Error("Out of provider...");
    }

    const {todos, filter} = context;

    const filteredToDos = todos.filter(t => {
        if (filter === "active") {
            return !t.completed;
        }

        if (filter === "done") {
            return t.completed;
        }

        return true;
    })

    return (
        <div className="space-y-3">
            {filteredToDos.map((todo) => (
                <ToDoItem todo={todo} key={todo.id} />
            ))}
        </div>
    );
};
