import React, {useState} from 'react'
import {orderAZ, orderZA, continentFilter, activityFilter} from '../actions/actions';
import { useDispatch } from 'react-redux';

 
const Filters = () => {

const [state, setstate] = useState({filtro:''})
const dispatch = useDispatch()
const orderCountries = str => {
    if(str === 'ZA'){
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
if(state.filtro === 'Continente'){
    setstate({filtro:''})
    return dispatch(continentFilter())
}else if(state.filtro === 'Actividad'){
    setstate({filtro:''})
    return dispatch(activityFilter())
}

    return ( 
        <div>
            <label htmlFor='order'>Ordenar Por</label>
           <div>
               <label htmlFor='Z-A'>Z-A</label>
               <input type="radio" id='Z-A' name='order' onClick={() => orderCountries('ZA')}/>
               <label htmlFor='A-Z' value='A-Z'>A-Z</label>
               <input type="radio" id='A-Z' name='order' onClick={() => orderCountries('AZ')}/>
           </div>
        <label htmlFor='filterBy'>Filtrar Por</label>
            <select 
                name="filtro" 
                id='filterBy' 
                value={state.filtro}
                onChange={handleChange}>
                { ['Selecionar', 'Actividad', 'Continente'].map(val =>
                (<option value={val}>{val}</option>))
                }   
            </select>   
        </div>
     );
}
 
export default Filters;