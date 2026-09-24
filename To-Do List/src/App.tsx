import { AddToDo } from "./components/AddToDo";
import { ToDoContextProvider } from "./components/context/todoContextProvider";
import { FilterToDo } from "./components/FilterToDo";
import { List } from "./components/List";
import { ToDoList } from "./components/ToDoList";

export default function App() {
    return (
        <ToDoContextProvider>
            <div className="min-h-screen bg-[#f7f8fc] text-slate-900">
                <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
                    <ToDoList />
                    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
                        <section className="order-2 min-w-0 space-y-4 lg:order-1">
                            <FilterToDo />
                            <List />
                        </section>
                        <aside className="order-1 lg:order-2">
                            <AddToDo />
                        </aside>
                    </div>
                </main>
            </div>
        </ToDoContextProvider>
    );
}
