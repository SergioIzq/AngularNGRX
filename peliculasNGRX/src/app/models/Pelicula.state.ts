import { ApiResponse } from "./ApiResponse.interface";

export interface PeliculaState {
    cargando: boolean,
    listaPeliculas: ApiResponse | null
}