import type { Dispatch } from "react";
import { ADD, REMOVE, COMPLETE, SET_FILTER } from "./ActionTypes";

export type ToDo = {
    id: number;
    title: string;
    completed: boolean;
};

export type ToDoList = {
    todos: ToDo[];
};

export type Filter = "all" | "active" | "done";

export type State = {
    todos: ToDo[];
    filter: Filter;
};

export type Action =
    | { type: typeof ADD; payload: string }
    | { type: typeof REMOVE; payload: number }
    | { type: typeof COMPLETE; payload: number }
    | { type: typeof SET_FILTER; payload: Filter };

export type ContextType = {
    state: State;
    dispatch: Dispatch<Action>;
};
