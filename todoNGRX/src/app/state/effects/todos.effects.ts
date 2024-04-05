import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, mergeMap } from "rxjs";
import { map, catchError } from "rxjs";
import { TodosService } from "src/app/todos-service.service";
import * as todosActions from 'src/app/state/actions/todos.actions';

@Injectable()

export class TodosEffects {
  constructor(
    private actions$: Actions,
    private todosService: TodosService
  ) { }

  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(todosActions.cargarTodos),
    mergeMap(() => this.todosService.getAllTodos()
      .pipe(
        map(listaTodos => ({ type: 'cargarTodosSuccess', listaTodos })),
        catchError(() => of(todosActions.cargarTodosFailure()))
      ))
  )
  );

  editarTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todosActions.editarTodo),
      mergeMap(({ todo }) =>
        this.todosService.editarTodo(todo)
          .pipe(
            map(() => todosActions.editarTodoSuccess()),
            catchError(() => of(todosActions.editarTodoFailure()))
          )
      )
    )
  );


  eliminarTodo$ = createEffect(() => this.actions$.pipe(
    ofType(todosActions.eliminarTodo),
    mergeMap(({ idTodo }) => this.todosService.eliminarTodo(idTodo)
      .pipe(
        map(() => todosActions.cargarTodos()),
        catchError(() => of(todosActions.cargarTodosFailure()))
      )
    )
  ));

  crearTodo$ = createEffect(() => this.actions$.pipe(
    ofType(todosActions.crearTodo),
    mergeMap(({ todo }) => this.todosService.crearTodo(todo)
      .pipe(
        map(() => todosActions.cargarTodos()),
        catchError(() => of(todosActions.cargarTodosFailure()))
      )
    )
  ));

  cargarTodoPorId$ = createEffect(() => this.actions$.pipe(
    ofType(todosActions.cargarTodoPorId),
    mergeMap(({ id }) => this.todosService.getTodoById(id)
      .pipe(
        map(todoPorId => ({ type: 'cargarTodoPorIdSuccess', todoPorId })),
        catchError(() => of(todosActions.cargarTodoPorIdFailure()))
      )
    )
  ));
}
