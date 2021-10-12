
import {
    VER_PAISES,
    PAISES_LOADING,
    BUSCAR_PAIS,
    BUSCAR_PAIS_ERROR,
    VER_DETALLE_PAIS,
    ZA_FILTER,
    AZ_FILTER,
    CONTINENT_FILTER,
    CLEAR_PAISES,

    SIN_ACTIVIDAD_FILTER,
    CON_ACTIVIDAD_FILTER,
    ACTIVIDAD_LOADING,
    CREAR_ACTIVIDAD,
    CLEAR_FILTERS,
} from '../types'

//creadores de acciones
import axios from 'axios'
export function verPaises(){

    return function(dispatch){
        dispatch({type: PAISES_LOADING,payload:true})
        return fetch('http://localhost:3001/countries')
        .then(response => response.json())
        .then(data => dispatch({type: VER_PAISES,payload: data}))         
    }
}

export function busquedaPais(name){

    return async function(dispatch){
        dispatch({type: PAISES_LOADING,payload:true})
        let request 
        try{
            request = await axios.get(`http://localhost:3001/countries/?name=${name}`)
        }catch(error){
            dispatch({type: BUSCAR_PAIS_ERROR, payload:'País no encontrado, limpie los filtros'})
        }
        if(request){
              request = await request.data
              return dispatch({type: BUSCAR_PAIS, payload: request})
         }
              
                
    }
}
export function verDetalle(idPais){
    return function(dispatch){
        dispatch({type: PAISES_LOADING,payload:true})
       return fetch(`http://localhost:3001/countries/${idPais}`)
        .then(response =>  response.json())
        .then(data => dispatch({type: VER_DETALLE_PAIS,payload: data})) 
}
}


export function clearFilters(){
    return function(dispatch){
        dispatch({type: PAISES_LOADING,payload:true})
    return dispatch({type: CLEAR_FILTERS})
    }
}

export function orderAZ(){
    return function(dispatch){
        dispatch({type: PAISES_LOADING,payload:true})
    return dispatch({type: ZA_FILTER})
    }
}

export function orderZA(){
    return function(dispatch){
        dispatch({type: PAISES_LOADING,payload:true})
    return dispatch({type: AZ_FILTER})
    }
}

//ACTIVIDADES

export function crearActividad(obj) {
    return function(dispatch) {
        dispatch({type:ACTIVIDAD_LOADING, payload: true })
        
       fetch('http://localhost:3001/activity',{
            method: "POST",
            body: JSON.stringify(obj),
            headers: {'Content-Type': 'application/json'}
        })
        .then(() => dispatch({type:CREAR_ACTIVIDAD}))
        .then(() => dispatch({type: CLEAR_PAISES}))
        .then(() => alert( 'La actividad se agregó correctamente',))
        
    }
}
export function filterValue(valor) {
    return function(dispatch) {
        dispatch({type:ACTIVIDAD_LOADING, payload: true })
    return dispatch({type: CONTINENT_FILTER, payload: valor})  
}
}

export function activityFilter(valor) {
    return function(dispatch) {
        dispatch({type:ACTIVIDAD_LOADING, payload: true })
        if(valor === 'Con Actividad'){
            return dispatch({type: CON_ACTIVIDAD_FILTER})
        }else{
            return dispatch({type: SIN_ACTIVIDAD_FILTER})

        }
    }
}
export function restoreAll() {
    return verPaises()
}