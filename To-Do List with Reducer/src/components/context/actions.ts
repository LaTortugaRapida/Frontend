import { ADD, COMPLETE, REMOVE, SET_FILTER } from "./ActionTypes";
import type { Action, Filter } from "./types";

export const addToDo = (title: string): Action => ({
    type: ADD,
    payload: title,
});

export const removeToDo = (id: number): Action => ({
    type: REMOVE,
    payload: id,
});

export const completeToDo = (id: number): Action => ({
    type: COMPLETE,
    payload: id,
});

export const filterToDos = (filter: Filter): Action => ({
    type: SET_FILTER,
    payload: filter,
});
