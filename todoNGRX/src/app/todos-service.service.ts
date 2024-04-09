import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from './models/ApiResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<ApiResponse[]> {
    return this.http.get<ApiResponse[]>(this.apiUrl);
  }

  getTodoById(id: string): Observable<ApiResponse> {
    const url = `${this.apiUrl}/?id=${id}`;

    return this.http.get<ApiResponse>(url);
  }

  eliminarTodo(id: number): Observable<ApiResponse[]> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<ApiResponse[]>(url);
  }

  crearTodo(todo: ApiResponse): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiUrl, todo);
  }

  editarTodo(todo: ApiResponse): Observable<ApiResponse> {
    const url = `${this.apiUrl}/${todo.id}`;
    
    return this.http.put<ApiResponse>(url, todo);
  }

}
