import { ApiResponse } from "./ApiResponse.interface";

export interface TodoState {
    cargando: boolean,
    listaTodos: ApiResponse[] | null,
    errorCarga: boolean,
    todoPorId: ApiResponse[] | null
}