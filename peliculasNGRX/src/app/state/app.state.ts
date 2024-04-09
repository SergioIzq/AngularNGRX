import { ActionReducerMap } from "@ngrx/store";
import { PeliculaState } from "../models/Pelicula.state";
import { peliculasReducer } from './reducers/peliculas.reducers';

export interface AppState {
    peliculas: PeliculaState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    peliculas: peliculasReducer
}