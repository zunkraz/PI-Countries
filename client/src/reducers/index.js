//Con los reducers explican como cambia el estado de la aplicacion despues de que alguna accion sucedio
import { VER_PAISES,
    PAISES_LOADING,
    CLEAR_PAISES,
    CLEAR_FILTERS,
    AZ_FILTER,
    ZA_FILTER,
    CREAR_ACTIVIDAD,
    ACTIVIDAD_LOADING,
    BUSCAR_PAIS,
    VER_DETALLE_PAIS,
    BUSCAR_PAIS_ERROR, 
    CONTINENT_FILTER,
    CON_ACTIVIDAD_FILTER,
    SIN_ACTIVIDAD_FILTER} from '../types';

//Funciones del helpers 
import {compareAZ, compareZA} from '../helpers/helpers' 
//Estado inicial

const initialState = {
    paises: [],
    loading:false,
    filters:[],
    aux: {},
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
            filters:action.payload,
            aux: {},
            error: ''
        }
    case BUSCAR_PAIS: 
        return {
            ...state,
            filters: [action.payload],
            loading:false,
            error: ''
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
            aux: action.payload,
            loading:false
        }
    case CLEAR_PAISES:
        return{
            ...state,
            paises: [],
            filters: [],
            loading: false
        }
    case CLEAR_FILTERS: 
        return {
            ...state,
            filters: [...state.paises],
            aux:[],
            loading: false
        }
    case AZ_FILTER:
        return{
            ...state,
            filters: state.filters.sort(compareAZ),
            loading: false
        }
    case ZA_FILTER:
        return{
            ...state,
            filters: state.filters.sort(compareZA),
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
            filters: state.paises.filter(pais => pais.continente === action.payload),
            loading:false,
        }
    case CON_ACTIVIDAD_FILTER:
        return{
            ...state,
            filters: state.paises.filter(pais => pais.Activities > 0).length ? state.paises.filter(pais => pais.Activities > 0) : ['Nada Que mostrar'],
            loading:false,
        }
    case SIN_ACTIVIDAD_FILTER:
        return{
            ...state,
            filters: state.paises.filter(pais => pais.Activities === 0),
            loading:false,
        }
    default:
        return state;
}  }
