import {
    VER_PAISES,
    PAISES_LOADING,

    CREAR_ACTIVIDAD,
    ACTIVIDAD_SUCCESS,
    ACTIVIDAD_ERROR
} from '../types'

//creadores de acciones

export function verPaises(){
    
return function(dispatch){
    dispatch({type: PAISES_LOADING,payload:true})
    
    return fetch('http://localhost:3001/countries')
            .then(response => response.json())
            .then(data => dispatch({type: VER_PAISES,payload: data}))
}
}
