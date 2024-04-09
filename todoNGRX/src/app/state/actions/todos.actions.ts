import { createAction, props } from "@ngrx/store";
import { ApiResponse } from "src/app/models/ApiResponse.interface";

export const cargarTodos = createAction(
    'cargarTodos'
);

export const cargarTodosSuccess = createAction(
    'cargarTodosSuccess',
    props<{ listaTodos: ApiResponse[] }>()
);

export const cargarTodosFailure = createAction(
    'cargarTodosFailure',
);

export const eliminarTodo = createAction(
    'eliminarTodo',
    props<{ idTodo: number }>()
);

export const crearTodo = createAction(
    'crearTodo',
    props<{ todo: ApiResponse }>()
);

export const crearTodoSuccess = createAction(
    'crearTodoSuccess',
    props<{ todo: ApiResponse }>()
);

export const crearTodoFailure = createAction(
    'crearTodoFailure',
);

export const editarTodo = createAction(
    'editarTodo',
    props<{ todo: ApiResponse }>()
);

export const editarTodoSuccess = createAction(
    'editarTodoSucces',
);

export const editarTodoFailure = createAction(
    'editarTodoFailure',
);

export const cargarTodoPorId = createAction(
    'cargarTodoPorId',
    props<{ id: string }>() 
);

export const cargarTodoPorIdSuccess = createAction(
    'cargarTodoPorIdSuccess',
    props<{ todoPorId: ApiResponse[] }>()
);

export const cargarTodoPorIdFailure = createAction(
    'cargarTodoPorIdFailure',
);
