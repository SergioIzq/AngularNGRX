import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponse } from './models/ApiResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<ApiResponse> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + 'c2Y0qOBThcgbmAg_DrwR' 
    });
    return this.http.get<ApiResponse>('https://the-one-api.dev/v2/movie', { headers: headers }); 
  }

}
