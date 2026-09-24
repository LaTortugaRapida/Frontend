import { useContext } from "react";
import { ToDoContext } from "./context/todoContext";

export const FilterToDo = () => {
    const context = useContext(ToDoContext);

    if (!context) {
        throw new Error("Out of provider...");
    }

    const { setFilter } = context;

    const selectFilter = (filter: "all" | "active" | "done") => {
        setFilter(filter);
    };

    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_8px_30px_rgba(15,23,42,0.04)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
            <div>
                <p className="text-sm font-bold text-slate-900">Your tasks</p>
                <p className="mt-1 text-xs text-slate-400">
                    Choose a view to stay on track
                </p>
            </div>
            <div className="flex w-full gap-1 rounded-xl bg-slate-100 p-1 text-xs font-semibold sm:w-auto">
                <button
                    onClick={() => selectFilter("all")}
                    className="flex-1 rounded-lg bg-white px-4 py-2 text-indigo-700 shadow-sm ring-1 ring-slate-200/70 transition-transform active:scale-95 sm:flex-none"
                >
                    All
                </button>
                <button
                    onClick={() => selectFilter("active")}
                    className="flex-1 rounded-lg px-4 py-2 text-slate-500 transition-all hover:bg-white/70 hover:text-slate-900 active:scale-95 sm:flex-none"
                >
                    Active
                </button>
                <button
                    onClick={() => selectFilter("done")}
                    className="flex-1 rounded-lg px-4 py-2 text-slate-500 transition-all hover:bg-white/70 hover:text-slate-900 active:scale-95 sm:flex-none"
                >
                    Done
                </button>
            </div>
        </div>
    );
};
