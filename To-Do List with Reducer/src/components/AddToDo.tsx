import { useForm, type SubmitHandler } from "react-hook-form";
import type { ToDo } from "./context/types";
import { ToDoContext } from "./context/todoContext";
import { useContext } from "react";

type ToDoDetails = Omit<ToDo, "id" | "completed">;
export const AddToDo = () => {
    const context = useContext(ToDoContext);

    if (!context) {
        throw new Error("Out of provider...");
    }

    const { dispatch } = context;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ToDoDetails>();

    const handleAdd: SubmitHandler<ToDoDetails> = (data) => {
        dispatch({type: "ADD", payload: data.title});
        reset()
    };
    
    return (
        <div className="rounded-2xl bg-indigo-700 p-6 text-white shadow-xl shadow-indigo-100">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-2xl font-light ring-1 ring-white/20">
                +
            </div>
            <p className="mt-2 text-sm leading-6 text-indigo-200">
                What would you like to get done today?
            </p>
            <form className="mt-6 space-y-3" onSubmit={handleSubmit(handleAdd)}>
                {errors.title && (
                    <p className="rounded-lg bg-rose-400/15 px-3 py-2 text-xs font-semibold text-rose-100">{errors.title.message}</p>
                )}
                <input
                    id="todo-input"
                    type="text"
                    {...register("title", {
                        required: "Please fill in the title.",
                    })}
                    placeholder="Add a new task..."
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-indigo-200 focus:border-white focus:bg-white/15 focus:ring-4 focus:ring-white/10"
                />
                <button type="submit" className="w-full rounded-xl bg-white px-4 py-3 text-sm font-bold text-indigo-700 transition-all hover:bg-indigo-50 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Add a task
                </button>
            </form>
        </div>
    );
};
