import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cargarPeliculas } from 'src/app/state/actions/peliculas.actions';
import { selectCargando, selectListaPeliculas } from '../../state/selectors/peliculas.selectors';
import { AppState } from 'src/app/state/app.state';
import { ApiResponse } from 'src/app/models/ApiResponse.interface';

@Component({
  selector: 'app-pelicula-page',
  templateUrl: './pelicula-page.component.html',
  styleUrls: ['./pelicula-page.component.css']
})
export class PeliculaPageComponent implements OnInit {

  cargando$: Observable<boolean> = new Observable();
  peliculas$: Observable<ApiResponse | null> = new Observable();

  constructor(private store: Store<AppState>) { }


  ngOnInit(): void {
    this.cargando$ = this.store.select(selectCargando);
    this.peliculas$ = this.store.select(selectListaPeliculas);

    this.store.dispatch(cargarPeliculas());    
  }

}
