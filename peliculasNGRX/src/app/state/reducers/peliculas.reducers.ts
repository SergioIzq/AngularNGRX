import { createReducer, on } from "@ngrx/store";
import { cargarPeliculas, peliculasCargadas } from "../actions/peliculas.actions";
import { PeliculaState } from "../../models/Pelicula.state";

export const estadoInicial: PeliculaState = { cargando: false, listaPeliculas: null };

export const peliculasReducer = createReducer(
    estadoInicial,
    on(cargarPeliculas, (state) => {
        return { ...state, cargando: true };
    }),
    on(peliculasCargadas, (state, { listaPeliculas }) => {
        console.log(listaPeliculas)
        return { ...state, cargando: false, listaPeliculas };
    })
);
