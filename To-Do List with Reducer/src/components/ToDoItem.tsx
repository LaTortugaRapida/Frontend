import type React from "react";
import type { ToDo } from "./context/types";
import { useContext } from "react";
import { ToDoContext } from "./context/todoContext";
import { completeToDo, removeToDo } from "./context/actions";

type Props = {
    todo: ToDo;
};
export const ToDoItem: React.FC<Props> = ({ todo }) => {
    const context = useContext(ToDoContext);

    if (!context) {
        throw new Error("Out of provider!");
    }

    const { dispatch } = context;
    
    return (
        <div className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white px-4 py-4 shadow-[0_6px_24px_rgba(15,23,42,0.04)] transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-[0_12px_30px_rgba(79,70,229,0.10)] sm:px-5">
            <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${todo.completed ? "border-emerald-500 bg-emerald-500" : "border-slate-300 group-hover:border-indigo-400"}`}
            >
                {todo.completed && (
                    <span className="h-2 w-2 rounded-full bg-white" />
                )}
            </span>
            <h3
                className={`min-w-0 flex-1 text-sm font-semibold ${todo.completed ? "text-slate-400 line-through" : "text-slate-700"}`}
            >
                {todo.title}
            </h3>
            <button
                className="shrink-0 rounded-lg px-2.5 py-2 text-xs font-semibold text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
                onClick={() => dispatch(removeToDo(todo.id))}
            >
                Delete
            </button>
            <button
            className={`shrink-0 rounded-lg px-3 py-2 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${todo.completed ? "bg-slate-100 text-slate-500 hover:bg-slate-200" : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"}`}
                onClick={() => dispatch(completeToDo(todo.id))}
            >
                {todo.completed ? "Cancel" : "Complete"}
            </button>
        </div>
    );
};
