import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/ApiResponse.interface';
import { selectCargando, selectTodosList, selectErrorCarga } from 'src/app/state/selectors/todos.selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { cargarTodos, eliminarTodo } from 'src/app/state/actions/todos.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css']
})
export class TodosPageComponent implements OnInit {

  cargando$: Observable<boolean> = new Observable();
  todos$: Observable<ApiResponse[] | null> = new Observable();
  error$: Observable<boolean> = new Observable();

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.cargando$ = this.store.select(selectCargando);
    this.todos$ = this.store.select(selectTodosList);
    this.error$ = this.store.select(selectErrorCarga)

    this.store.dispatch(cargarTodos());

  }
  
  dispararEliminarTodo(id: number) {
    this.store.dispatch(eliminarTodo({ idTodo: id }));
  }

}
