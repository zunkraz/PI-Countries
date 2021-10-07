import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { compareAZ } from '../helpers/helpers';
import {crearActividad} from '../actions/actions'

const Actividad = () => {

const dispatch = useDispatch();
const state = useSelector(state => state.paises.sort(compareAZ));

const [activity,setActivity] = useState({
    nombre: '',
    dificultad: '',
    duracion: '',
    temporada: '',
    countries: [],
})
const [error,setError] = useState(true)

const handleChange = e => {
    console.log(e.target.value)
    setActivity({
        ...activity,
        [e.target.name] : e.target.value
        
    })
    //Validaciones
}

const handleSubmit = e => {
    e.preventDefault();
   //Validaciones
    dispatch(crearActividad(activity))
    //AQUI TENEMOS QUE RENDERIZAR un mensaje
    //TERMINAR 
    //TERMINAR 
    //TERMINAR
    //Limpieza del form
    setActivity({
        nombre: '',
        dificultad: '',
        duracion: '',
        temporada: '',
        countries: [],
    })
}

return ( 
    <div>
    <form onSubmit={handleSubmit} autoComplete='off'>
    <label htmlFor="nombre">Nombre de la actividad </label>
    <input 
    type="text" 
    placeholder='Nombre'
    name='nombre'
    value={activity.nombre}  
    onChange={handleChange}/>

    <label htmlFor="countries">Seleccionar Pais</label>
    <select 
    name="countries" 
    id='countries'
    value={activity.countries} 
    onChange={handleChange}>
        <option defaultValue>Seleccionar</option>
        {state.map(pais =>
            (<option key={pais.id}  value={pais.id}>{pais.nombre} {pais.id}</option>))
        }   
    </select>  

    <label htmlFor="dificulties">Seleccionar Dificultad</label>
    <select 
    name="dificultad" 
    id='dificulties' 
    value={activity.dificultad}
    onChange={handleChange}>
        { ['Seleccionar',1,2,3,4,5].map(val =>
            (<option value={val}>{val}</option>))
        }   
    </select> 

    <label htmlFor="nombre">Duración (min)</label>
    <input 
    type="number" 
    placeholder='Duracion'
    name='duracion'
    value={activity.duracion}
    onChange={handleChange}/>

    <label htmlFor="temporada">Temporada</label>
    <select 
    id='temporada' 
    name="temporada" 
    value={activity.temporada}
    onChange={handleChange}>
        {['Seleccionar','Invierno', 'Primavera','Verano','Otoño'].map(val =>
            (<option value={val}>{val}</option>))
        }   
    </select>  

     <input 
     type="submit" 
     value='Crear Actividad'
    //  disabled={error ? true : false}
     />
     
    </form>
    </div>
     );

}

export default Actividad;
