import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { PeliculaState } from "src/app/models/Pelicula.state";

export const selectPeliculasFeature = (state: AppState) => state.peliculas;

export const selectListaPeliculas = createSelector(
    selectPeliculasFeature,
    (state: PeliculaState) => state.listaPeliculas
);

export const selectCargando = createSelector(
    selectPeliculasFeature,
    (state: PeliculaState) => state.cargando
);