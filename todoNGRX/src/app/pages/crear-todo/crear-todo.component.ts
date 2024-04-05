import { Component } from '@angular/core';
import { AppState } from 'src/app/state/app.state';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { crearTodo } from 'src/app/state/actions/todos.actions';
import { Observable } from 'rxjs';
import { selectCargando, selectErrorCarga } from 'src/app/state/selectors/todos.selectors';

@Component({
  selector: 'app-crear-todo',
  templateUrl: './crear-todo.component.html',
  styleUrls: ['./crear-todo.component.css']
})
export class CrearTodoComponent {

  cargando$: Observable<boolean> = new Observable();
  error$: Observable<boolean> = new Observable();

  todoForm: FormGroup = this.fb.group({
    todo: ['', [Validators.required, Validators.minLength(1)]],
    completed: ['', Validators.required],
  });;

  constructor(private store: Store<AppState>, private fb: FormBuilder) { }

  get f() {
    return this.todoForm?.controls;
  }

  onSubmit() {
    this.store.dispatch(crearTodo({ todo: this.todoForm.value }));

    this.cargando$ = this.store.select(selectCargando);
    this.error$ = this.store.select(selectErrorCarga);
  }
}
