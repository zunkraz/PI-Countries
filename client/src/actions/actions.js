
import {
    VER_PAISES,
    PAISES_LOADING,
    BUSCAR_PAIS,
    BUSCAR_PAIS_ERROR,
    VER_DETALLE_PAIS,
    ZA_FILTER,
    AZ_FILTER,
    CONTINENT_FILTER,

    ACTIVIDAD_FILTER,
    ACTIVIDAD_LOADING,
    CREAR_ACTIVIDAD,
    CLEAR_FILTERS,
} from '../types'

//libreria extra
import Swal from 'sweetalert2'
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

    return async function(dispatch){
        dispatch({type: PAISES_LOADING,payload:true})  
        let request =  await fetch(`http://localhost:3001/countries/?name=${name}`)
        request = await request.json()
            if(request.status === 404){
                dispatch({type: BUSCAR_PAIS_ERROR, payload:'País no encontrado'})
            }else{
               dispatch({type: BUSCAR_PAIS, payload: request})
            }
                
                
    }
}
export function verDetalle(idPais){
    return function(dispatch){
        dispatch({type: PAISES_LOADING,payload:true})
        console.log('entro')
       return fetch(`http://localhost:3001/countries/${idPais}`)
        .then(response => response.json())
        .then(data => dispatch({type: VER_DETALLE_PAIS,payload: data})) 
}
}
//ESTO HAY QUE CORREGIRLO Y PERSONALIZAR LO QUE SE MANDA AL FRONT

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
        .then(() => { Swal.fire(
            'Correcto',
            'La actividad se agregó correctamente',
            'success'
        )})
        
    }
}

export function  continentFilter() {
    return function(dispatch) {
            dispatch({type:ACTIVIDAD_LOADING, payload: true })
        return dispatch({type: CONTINENT_FILTER})
    }   
}

export function activityFilter() {
    return function(dispatch) {
        dispatch({type:ACTIVIDAD_LOADING, payload: true })
    return dispatch({type: ACTIVIDAD_FILTER})
    }
}
