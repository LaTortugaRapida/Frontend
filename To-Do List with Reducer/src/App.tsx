import { useReducer } from "react";
import { AddToDo } from "./components/AddToDo";
import { FilterToDo } from "./components/FilterToDo";
import { ToDoList } from "./components/ToDoList";
import { reducer } from "./components/context/reducer";
import { initialState } from "./components/context/state";
import { ToDoContext } from "./components/context/todoContext";

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ToDoContext.Provider value={{ state, dispatch }}>
            <ToDoList />
            <AddToDo />
            <FilterToDo />
        </ToDoContext.Provider>
    );
}
