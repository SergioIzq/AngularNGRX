import { ActionReducerMap } from "@ngrx/store";
import { TodoState } from "../models/todo.state";
import { todosReducer } from "./reducers/todos.reducers";

export interface AppState {
    todos: TodoState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    todos: todosReducer
}