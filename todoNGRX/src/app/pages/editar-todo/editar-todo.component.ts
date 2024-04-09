import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { Observable } from 'rxjs';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { selectCargando, selectErrorCarga, selectTodoPorId } from 'src/app/state/selectors/todos.selectors';
import { cargarTodoPorId, editarTodo } from 'src/app/state/actions/todos.actions';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse } from 'src/app/models/ApiResponse.interface';

@Component({
  selector: 'app-editar-todo',
  templateUrl: './editar-todo.component.html',
  styleUrls: ['./editar-todo.component.css']
})
export class EditarTodoComponent implements OnInit {

  todoId: string = '';
  todoPorId$: Observable<ApiResponse[] | null> = new Observable();
  cargando$: Observable<boolean> = new Observable();
  error$: Observable<boolean> = new Observable();


  todoForm: FormGroup = this.fb.group({
    todo: ['', [Validators.required, Validators.minLength(1)]],
    completed: ['', Validators.required],

  });;

  constructor(private store: Store<AppState>, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idString = params.get('id');
      if (idString !== null) {
        const id = idString;
        this.todoId = id;
      } else {
        console.error('No hay id por parámetro');
      }
    });

    this.store.dispatch(cargarTodoPorId({ id: this.todoId }));

    this.cargando$ = this.store.select(selectCargando);
    this.todoPorId$ = this.store.select(selectTodoPorId);

    this.todoPorId$.subscribe(todo => console.log('Todo:', todo));
    console.log(this.todoPorId$);
    this.error$ = this.store.select(selectErrorCarga);

  }

  get f() {
    return this.todoForm?.controls;
  }

  onSubmit() {
    const todoData = this.todoForm.value;
    todoData.id = this.todoId;

    this.store.dispatch(editarTodo({ todo: this.todoForm.value }));

    this.cargando$ = this.store.select(selectCargando);
    this.error$ = this.store.select(selectErrorCarga);
  }
}