import {
    VER_PAISES,
    PAISES_LOADING,
    BUSCAR_PAIS,

    CREAR_ACTIVIDAD,
    ACTIVIDAD_SUCCESS,
    ACTIVIDAD_ERROR,
    CLEAR_FILTERS
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
//CAMBIOS AQUI
export function busquedaPais(name){
    // name = name[0].toUpperCase() + name.slice(1)
    return function(dispatch){
        dispatch({type: PAISES_LOADING,payload:true})

        return fetch(`http://localhost:3001/countries/?name=${name}`)
        .then(response => response.json())
        .then(data => dispatch({type: BUSCAR_PAIS, payload:data}))
    }
} 

export function clearFilters(){
    return function(dispatch){
        dispatch({type: PAISES_LOADING,payload:true})
    return dispatch({type: CLEAR_FILTERS})
    }
}
