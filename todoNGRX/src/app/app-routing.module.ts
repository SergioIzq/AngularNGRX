import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTodoComponent } from './pages/crear-todo/crear-todo.component';
import { EditarTodoComponent } from './pages/editar-todo/editar-todo.component';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';

const routes: Routes = [
  { path: '', component: TodosPageComponent },
  { path: 'editar/:id', component: EditarTodoComponent },
  { path: 'crear', component: CrearTodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
