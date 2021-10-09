import React from 'react'
import { clearFilters } from '../actions/actions'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

const PaisBuscado = () => {

    const dispatch = useDispatch();
    const cleanCountry= () => dispatch(clearFilters());
    const aux = useSelector(state => state.aux);

    let actividades
    if(aux.Activities && aux.Activities.length){
        actividades = aux.Activities.map(element => {
        let act = 
        <div key={element.nombre}>
            <h3>Actividad: {element.nombre}</h3>
            <h3>Dificultad: {element.dificultad}</h3>
            <h3>Duración: {element.duracion}</h3>
            <h3>Temporada: {element.temporada}</h3>
        </div>
        return act
       })
    }
    return ( 
        <div>
            <img src={aux.image} alt="image of some country"
            className='divImage'/>
            <h2>{aux.nombre}</h2>
            <h3>{aux.continente}</h3>
            <h3>{aux.id}</h3>
            <h3>{aux.capital}</h3>
            <h3>{aux.area} km<sup>2</sup></h3>

    {aux.Activities && aux.Activities.length ?
        <div>{actividades}</div>
        : <h3>No hay actividades aun</h3>
    }
           
            <Link to={'/principal'}><button onClick={cleanCountry}>X</button> </Link>
            
        </div>

     );
}
 
export default PaisBuscado;