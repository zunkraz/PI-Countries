import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { compareAZ } from '../helpers/helpers';
import {crearActividad, verPaises} from '../actions/actions'
import { Link } from 'react-router-dom';

const Actividad = () => {

const dispatch = useDispatch();

const state = useSelector(state => state.paises.sort(compareAZ));
    if(!state.length){
        dispatch(verPaises())
    }
const [activity,setActivity] = useState({
    nombre: '',
    dificultad: '',
    duracion: '',
    temporada: '',
    countries: [],
})
const [error,setError] = useState({
    validOne: true,
    nombre: 'El nombre no puede contener dígitos',
    validTwo: true,
    duracion: 'La duración no puede ser Negativa',
    validThree: false
})
// const btnValid = () => {
//     // if(activity.nombre === ''|| activity.dificultad === '' || activity.duracion === ''
//     // || activity.temporada === '' || !activity.countries){
//     //     console.log(200)
//     //     return setError({
//     //         ...error,
//     //         validThree:true
//     //     })
//     // }else{
//     //     console.log(404)

//     //     return setError({
//     //         ...error,
//     //         validThree:false
//     //     })
//     // }
// }
const handleChange = e => {
    if(e.target.name === 'countries'){
        if(!activity['countries'].includes(e.target.value)){
                 setActivity({
                    ...activity,
                    countries:  [...activity.countries, e.target.value]  
                 }
                )
        }
    }else{
        
        if(e.target.name === 'nombre'){
            var regex = /\d+/g;
            let val = e.target.value.match(regex)
            setActivity({
                ...activity,
                [e.target.name] : e.target.value
                
            })
                if(val){
                   return  setError({
                    ...error,
                    validOne:false})
                }else{
                    return setError({
                        ...error,
                        validOne:true
                    })
                }

        }
        if(e.target.name === 'duracion'){
           if(Number(e.target.value) < 0){
               return setError({
                   ...error,
                   validTwo:false
                })
           }  
        }
        setError({
            ...error,
            validTwo:true})
        setActivity({
            ...activity,
            [e.target.name] : e.target.value  
        })
    }
  
}
const deleteId = id => (setActivity({
    ...activity,
    countries: activity.countries.filter( e => e !== id)})
)
const handleSubmit = e => {
    e.preventDefault();
   
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
    {error.validOne ? null : <h3>{error.nombre}</h3>}
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
            (<option key={val} value={val}>{val}</option>))
        }   
    </select> 

    <label htmlFor="nombre">Duración (min)</label>
    {error.validTwo ? null : <h3>{error.duracion}</h3>}
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
            (<option key ={val} value={val}>{val}</option>))
        }   
    </select>  

     <input 
     type="submit" 
     value='Crear Actividad'/>
     
    </form>
    <Link to={'/principal'}><button>Atras</button></Link>
    
    {activity.countries.length ? 
    <div>{activity.countries.map(e => (<span>{e} <button onClick={() => deleteId(e)}>x</button></span>))}</div>
     : null}
    {error.validThree ? <h3>Los campos no pueden estar vacíos</h3> : null}
    </div>
     );

}

export default Actividad;
