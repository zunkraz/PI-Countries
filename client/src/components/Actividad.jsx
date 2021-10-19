import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { compareAZ } from '../helpers/helpers';
import {crearActividad, verPaises} from '../actions/actions'
import { Link } from 'react-router-dom';
import './styles/Actividad.css'

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
    duracion: 'La duración no puede ser Negativa o Cero',
    invalidThree: true
})

const handleChange = e => {
    if(e.target.name === 'nombre'){
        var regex = /\d+/g;
        let val = e.target.value.match(regex)  
        //ERROR validOne
        setActivity({
            ...activity,
            nombre: e.target.value
        })
        if(val){
                setError({
             ...error,
             validOne:false,
            invalidThree: true,
            })
         }else{
             if(!Object.values({...activity, nombre: e.target.value}).includes('') && activity.countries.length){
                 setError({
                 ...error,
                     validOne:true,
                     invalidThree:false,
                  })
             }else{
                setError({
                    ...error,
                        validOne:true,
                        invalidThree:true,
                     })
             }
         }
    
    }else if(e.target.name === 'dificultad'){
        setActivity({
            ...activity,
            dificultad: e.target.value
        })
        
        if(Object.values({...activity, dificultad: e.target.value}).includes('') || Object.values({...activity, dificultad: e.target.value}).includes('Seleccionar') ||  activity.countries.length === 0 ){
            setError({
                ...error,
                invalidThree:true
            })
        }else{
            setError({
                ...error,
                invalidThree:false
            }) 
        }
    }else if(e.target.name === 'duracion'){
        setActivity({
            ...activity,
            duracion: e.target.value
        })
        if(Number(e.target.value) <= 0){
             setError({
                ...error,
                validTwo:false,
                invalidThree: true,
             })
        }else{
            if(Object.values({...activity, duracion: e.target.value}).includes('') || activity.countries.length === 0 ){
                setError({
                    ...error,
                    validTwo:true,
                    invalidThree:true
                })
            }else{
                setError({
                    ...error,
                    validTwo:true,
                    invalidThree:false
                }) 
            }
        }
        
    }else if(e.target.name === 'temporada'){
        setActivity({
            ...activity,
            temporada: e.target.value
        })
        if(Object.values({...activity, temporada: e.target.value}).includes('') || Object.values({...activity, temporada: e.target.value}).includes('Seleccionar') || activity.countries.length === 0 ){
            setError({
                ...error,
                invalidThree:true
            })
        }else{
            setError({
                ...error,
                invalidThree:false
            }) 
        }
    }else if(e.target.name ==='countries' && !activity['countries'].includes(e.target.value) && e.target.value !== 'Seleccionar'){
        setActivity({
            ...activity,
            countries:  [...activity.countries, e.target.value]  
         }
        )
        if(Object.values(activity).includes('') ){
            setError({
            ...error,
            invalidThree: true,
            }) 
        }else{
            setError({
            ...error,
            invalidThree: false,
            })   
        }
    }
}

const deleteId = id => {
    setActivity({
    ...activity,
    countries: activity.countries.filter( e => e !== id)
    })
    if(activity.countries.filter( e => e !== id).length === 0 || Object.values(activity).includes('') || Object.values({...activity}).includes('Seleccionar')){
        setError({
            ...error,
            invalidThree: true
        })
    }else{
        setError({
            ...error,
            invalidThree: false
        })
    }
}



const handleSubmit = e => {
    e.preventDefault();
   
        dispatch(crearActividad(activity))
      
        //Limpieza del form
        setActivity({
            nombre: '',
            dificultad: '',
            duracion: '',
            temporada: '',
            countries: [],
        })
        setError({
            invalidThree:true
        })
    
}

return ( 
    <div className='mainActividad'>
    <form onSubmit={handleSubmit} autoComplete='off' className='formActividad'>
        <label className='labelActividad' htmlFor="nombre">Nombre de la actividad </label>
        {error.validOne ? null : <h3>{error.nombre}</h3>}
        <input 
        className='inputActividad' 
        type="text" 
        placeholder='Nombre'
        name='nombre'
        value={activity.nombre}  
        onChange={handleChange}/>

        <label className='labelActividad'  htmlFor="countries">Seleccionar Pais</label>
        <select 
        className='selectActividad'
        name="countries" 
        id='countries'
        // value={activity.countries} 
        onChange={handleChange}>
        <option defaultValue>Seleccionar</option>
        {state.map(pais =>
            (<option key={pais.id}  value={pais.id}>{pais.nombre} {pais.id}</option>))
        }   
        </select>  

        <label className='labelActividad' htmlFor="dificulties">Seleccionar Dificultad</label>
        <select
        className='selectActividad'
        name="dificultad" 
        id='dificulties' 
        // value={activity.dificultad}
        onChange={handleChange}>
        { ['Seleccionar',1,2,3,4,5].map(val =>
            (<option key={val} value={val}>{val}</option>))
        }   
         </select> 

        <label className='labelActividad' htmlFor="nombre">Duración (min)</label>
        {error.validTwo ? null : <h3>{error.duracion}</h3>}
        <input
        className='inputActividad' 
        type="number" 
        placeholder='Duracion'
        name='duracion'
        value={activity.duracion}
        onChange={handleChange}/>

        <label className='labelActividad' htmlFor="temporada">Temporada</label>
        <select
        className='selectActividad'
        id='temporada' 
        name="temporada" 
        // value={activity.temporada}
        onChange={handleChange}>
        {['Seleccionar','Invierno', 'Primavera','Verano','Otoño'].map(val =>
            (<option key ={val} value={val}>{val}</option>))
        }   
        </select>  
        <div className='btnContainer'>
            <input 
            type="submit" 
            value='Crear Actividad'
            disabled={error.invalidThree} 
            className={error.invalidThree ? 'btnCrearActividadDisabled' : 'btnCrearActividad'}/>
     
            <Link to={'/principal'}><button className='btnCrearActividad'>Atras</button></Link>
        </div>
        </form>
    
        {activity.countries.length > 0 ? 
        <div className='ids'>{activity.countries.map(e => (<span key={e}>{e} <button onClick={() => deleteId(e)}>x</button></span>))}</div>
         : null}
        </div>
     );

}

export default Actividad;
