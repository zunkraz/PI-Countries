import React, {useState} from 'react'
import {orderAZ, orderZA,filterValue, activityFilter, verPaises} from '../actions/actions';
import { useDispatch } from 'react-redux';
import './styles/Filters.css'
import ig from './styles/imgs/insta.png'  
import linkedin from './styles/imgs/linkedin.png'  
import git from './styles/imgs/git.png'  
import { Link } from 'react-router-dom';


const Filters = ({changePage}) => {

const [state, setstate] = useState({filtro:''})
const dispatch = useDispatch()
const orderCountries = str => {
    if(str === 'Z-A'){
        return dispatch(orderAZ()) 
    }else{
        return dispatch(orderZA())
    }
}  

const handleChange = e => {
    setstate({
        ...state,
        [e.target.name] : e.target.value
        
    })
}
if(state.filtro){ 
    let valor = state.filtro
    if(valor === 'Con Actividad' || valor === 'Sin Actividad'){
        setstate({filtro:''})
        changePage(1)
        return  dispatch(activityFilter(valor))
    }
    setstate({filtro:''})
    changePage(1)
   return  dispatch(filterValue(valor))
}

    return ( 
        <div className='mainFilters'>
        <label htmlFor='order' className='label'>Ordenar Por:</label>
           <select onChange={e => orderCountries(e.target.value)} className='select'>
           <option>Seleccionar</option>
           <option key='8' name='Z-A' value='Z-A'>Z-A</option>
           <option key='9' name='A-Z' value='A-Z'>A-Z</option>
           </select>

        <label htmlFor='filterBy'  className='label'>Filtrar Por:</label>
        <select 
                className='select'
                name="filtro" 
                id='filterBy' 
                value={state.filtro}
                onChange={handleChange}>
        <option>Seleccionar</option>
        <optgroup label="Actividad">
            <option key='0' name='Sin Actividad' value='Sin Actividad'>Sin Actividad</option>
            <option key='1' value='Con Actividad'>Con Actividad</option>
        </optgroup>
        <optgroup label="Continente">
            <option key='2' name='Africa' value='Africa'>Africa</option>
            <option key='3' name='Antarctic' value='Antarctic'>Antarctic</option>
            <option key='4' name='Americas' value='Americas'>Americas</option>
            <option key='5' name='Asia' value='Asia'>Asia</option>
            <option key='6' name='Europe' value='Europe'>Europa</option>
            <option key='7' name='Oceania' value='Oceania'>Oceania</option>
        </optgroup>
        </select>   

        <button className='btnClean' onClick={() => dispatch(verPaises())}>Limpiar Filtros</button>
       
            <div className='divIcons'>
                <Link to='//instagram.com/arodri_g/' target='_blank'><img src={ig} className='icons' alt="" /></Link>
                <Link to='//linkedin.com/in/zunkraz' target='_blank'><img src={linkedin} className='icons' alt="" /></Link>
               <Link to='//github.com/zunkraz' target='_blank'><img src={git} className='icons' alt="" /></Link>
            </div>
        </div>
     );
}
 
export default Filters;