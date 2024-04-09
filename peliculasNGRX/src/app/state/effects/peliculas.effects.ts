import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, mergeMap } from "rxjs";
import { map, catchError } from "rxjs";
import { PeliculasService } from '../../peliculas.service';
import * as PeliculasActions from 'src/app/state/actions/peliculas.actions'
@Injectable()
export class PeliculasEffects {

    constructor(
        private actions$: Actions,
        private peliculasService: PeliculasService
    ) { }

    cargarPeliculas$ = createEffect(() => this.actions$.pipe(
        ofType(PeliculasActions.cargarPeliculas),
        mergeMap(() => this.peliculasService.getPeliculas()
            .pipe(
                map(listaPeliculas => ({ type: 'peliculasCargadas', listaPeliculas })),
                catchError(() => EMPTY)
            ))
    )
    );
}