import { createAction, props } from "@ngrx/store";
import { ApiResponse } from "src/app/models/ApiResponse.interface";

export const cargarPeliculas = createAction(
    'cargarPeliculas'
);

export const peliculasCargadas = createAction(
    'peliculasCargadas',
    props<{ listaPeliculas: ApiResponse }>()
);
