//Con los reducers explican como cambia el estado de la aplicacion despues de que alguna accion sucedio
import { VER_PAISES,
    PAISES_LOADING,
    CLEAR_FILTERS,
    AZ_FILTER,
    ZA_FILTER,
    CREAR_ACTIVIDAD,
    ACTIVIDAD_LOADING,
    BUSCAR_PAIS,
    VER_DETALLE_PAIS,
    BUSCAR_PAIS_ERROR, 
    CONTINENT_FILTER,
    ACTIVIDAD_FILTER} from '../types';

//Funciones del helpers 
import {compareAZ, compareZA, compareCONT, compareACT} from '../helpers/helpers' 
//Estado inicial

const initialState = {
    paises: [],
    loading:false,
    filters:[],
    error: ''
  }

export const reducer = (state=initialState,action) => {

switch (action.type) {
    case PAISES_LOADING:
        return {
            ...state,
            loading:action.payload
        }

    case VER_PAISES:
        return {
            ...state,
            paises: action.payload,
            loading: false,
            filters:action.payload
        }
    case BUSCAR_PAIS: 
        return {
            ...state,
            filters: [action.payload],
            loading:false
        }
    case BUSCAR_PAIS_ERROR:
        return{
            ...state,
            error: action.payload,
            loading:false
        }
    case VER_DETALLE_PAIS:
        return{
            ...state,
            filters: [action.payload],
            loading:false
        }
    case CLEAR_FILTERS: 
        return {
            ...state,
            filters: [...state.paises],
            loading: false
        }
    case AZ_FILTER:
        return{
            ...state,
            filters: state.paises.sort(compareAZ),
            loading: false
        }
    case ZA_FILTER:
        return{
            ...state,
            filters: state.paises.sort(compareZA),
            loading: false
        }
    case ACTIVIDAD_LOADING:
        return {
            ...state,
            loading:action.payload
        }
    case CREAR_ACTIVIDAD:
        return{
            ...state,
            loading:false
        }
    case CONTINENT_FILTER:
        return{
            ...state,
            filters: state.paises.sort(compareCONT),
            loading:false,
        }
    case ACTIVIDAD_FILTER:
        return{
            ...state,
            filters: state.paises.sort(compareACT),
            loading:false,
        }
    default:
        return state;
}  }
