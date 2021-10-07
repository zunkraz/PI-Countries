import React from 'react'
import {orderAZ, orderZA} from '../actions/actions';
import { useDispatch } from 'react-redux';

 
const Filters = () => {

const dispatch = useDispatch()

const orderCountries = str => {
    if(str === 'ZA'){
        return dispatch(orderAZ()) 
    }else{
        return dispatch(orderZA())
    }
}  

    return ( 
        <div>
            <h2>Ordenar Por</h2>
           <div>
               <label htmlFor='Z-A'>Z-A</label>
               <input type="radio" id='Z-A' name='Order' onClick={() => orderCountries('ZA')}/>
               <label htmlFor='A-Z' value='A-Z'>A-Z</label>
               <input type="radio" id='A-Z' name='Order' onClick={() => orderCountries('AZ')}/>
           </div>
        </div>
     );
}
 
export default Filters;