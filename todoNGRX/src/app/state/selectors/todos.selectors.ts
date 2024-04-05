import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { TodoState } from "src/app/models/todo.state";

export const selectTodosFeature = (state: AppState) => state.todos

export const selectTodosList = createSelector(
    selectTodosFeature,
    (state: TodoState) => state.listaTodos
);

export const selectCargando = createSelector(
    selectTodosFeature,
    (state: TodoState) => state.cargando
);

export const selectErrorCarga = createSelector(
    selectTodosFeature,
    (state: TodoState) => state.errorCarga
);

export const selectTodoPorId = createSelector(
    selectTodosFeature,
    (state: TodoState) => state.todoPorId
)
