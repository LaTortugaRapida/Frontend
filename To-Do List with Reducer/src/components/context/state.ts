import type { State } from "./types";

export const initialState: State = {
    todos: [
        { id: 101, title: "Buy groceries", completed: false },
        { id: 102, title: "Finish React homework", completed: false },
        { id: 103, title: "Go for a walk", completed: true },
        { id: 104, title: "Reply to emails", completed: false },
        { id: 105, title: "Clean the apartment", completed: false },
        { id: 106, title: "Read for 30 minutes", completed: true },
        { id: 107, title: "Practice JavaScript", completed: false },
        { id: 108, title: "Prepare dinner", completed: false },
        { id: 109, title: "Plan tomorrow", completed: true },
    ],

    filter: "all"
}