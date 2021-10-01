//Con los reducers explican como cambia el estado de la aplicacion despues de que alguna accion sucedio
import { VER_PAISES, VER_PAISES_ERROR, PAISES_LOADING,
     CREAR_ACTIVIDAD, ACTIVIDAD_SUCCESS, ACTIVIDAD_ERROR } from '../types';

//Estado inicial

const initialState = {
    paises: [],
    loading:false
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
            loading: false
        }
        
    default:
        return state;
}  }
