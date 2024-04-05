import { createReducer, on } from "@ngrx/store";
import * as todosActions from 'src/app/state/actions/todos.actions'
import { TodoState } from "src/app/models/todo.state";

export const estadoInicial: TodoState = { cargando: false, listaTodos: null, errorCarga: false, todoPorId: null };

export const todosReducer = createReducer(
    estadoInicial,
    on(todosActions.cargarTodos, (state) => {
        return {
            ...state,
            cargando: true,
        }
    }),
    on(todosActions.cargarTodosSuccess, (state, { listaTodos }) => {
        return {
            ...state,
            cargando: false,
            listaTodos
        };
    }),
    on(todosActions.cargarTodosFailure, (state) => {
        return {
            ...state,
            cargando: false,
            errorCarga: true
        };
    }),
    on(todosActions.crearTodo, (state) => {
        return {
            ...state,
            cargando: true,
        }
    }),
    on(todosActions.crearTodoSuccess, (state, { todo }) => {
        return {
            ...state,
            cargando: false,
            todo
        };
    }),
    on(todosActions.crearTodoFailure, (state) => {
        return {
            ...state,
            cargando: false,
            errorCarga: true
        };
    }),
    on(todosActions.editarTodo, (state, { todo }) => {
        return {
            ...state,
            cargando: true,
            todo
        }
    }),
    on(todosActions.editarTodoSuccess, (state) => {
        return {
            ...state,
            cargando: false,
        };
    }),
    on(todosActions.editarTodoFailure, (state) => {
        return {
            ...state,
            cargando: false,
            errorCarga: true
        };
    }),
    on(todosActions.cargarTodoPorId, (state, { id }) => {
        return {
            ...state,
            cargando: true,
            id
        }
    }),
    on(todosActions.cargarTodoPorIdSuccess, (state, { todoPorId }) => {
        return {
            ...state,
            cargando: false,
            todoPorId
        };
    }),
    on(todosActions.cargarTodoPorIdFailure, (state) => {
        return {
            ...state,
            cargando: false,
            errorCarga: true
        };
    }),
)