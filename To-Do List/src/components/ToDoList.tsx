export const ToDoList = () => {
    return (
        <header className="flex flex-col gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-indigo-600">
                    Personal workspace
                </p>
                <h1 className="text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl">
                    To-do list<span className="text-indigo-600">.</span>
                </h1>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                    Keep the important things moving, one small win at a time.
                </p>
            </div>
            <div className="inline-flex items-center gap-3 self-start rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700 sm:self-auto">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" />
                <span>Focus mode</span>
            </div>
        </header>
    );
};
