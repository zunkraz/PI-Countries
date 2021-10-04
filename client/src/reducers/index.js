//Con los reducers explican como cambia el estado de la aplicacion despues de que alguna accion sucedio
import { VER_PAISES, VER_PAISES_ERROR, PAISES_LOADING, CLEAR_FILTERS,
     CREAR_ACTIVIDAD, ACTIVIDAD_SUCCESS, ACTIVIDAD_ERROR, BUSCAR_PAIS } from '../types';

//Estado inicial

const initialState = {
    paises: [],
    loading:false,
    filters:[]
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
    //CAMBIOS AQUI
    case BUSCAR_PAIS: 
        return {
            ...state,
            filters: [action.payload],
            loading:false
        }
    case CLEAR_FILTERS: 
        return {
            ...state,
            filters: [],
            loading: false
        }
    default:
        return state;
}  }
