import { ADD, COMPLETE, REMOVE, SET_FILTER } from "./ActionTypes"
import type { State, Action } from "./types"

export const reducer = (state:State,  action:Action) => {
    switch(action.type) {
        case REMOVE:
            return {
                ...state, 
                todos:state.todos.filter(t => t.id !== action.payload)
            }
        case ADD:
            return {
                ...state, 
                todos:[{title: action.payload, id:Date.now(), completed:false},...state.todos]
            }
        case COMPLETE:
            return {
                ...state,
                todos: state.todos.map(t =>
                    t.id !== action.payload ? t : {...t, completed: !t.completed}
                )
            }
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state;
    }
}