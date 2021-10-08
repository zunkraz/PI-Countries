import React, {useState} from 'react';
import Listado from './Listado';
import Paginado from './Paginado';
import PaisBuscado from './PaisBuscado';
import Nav from './Nav';


import {clearFilters} from '../actions/actions';

import { useDispatch, useSelector} from 'react-redux';


const Principal = () => {
    
    const dispatch = useDispatch()
    //useState para activar el paginado
    const [page, setPage] = useState(1) 


const paisBuscado = useSelector(state => state.filters)
//Eliminar el pais
const cleanCountry= () => dispatch(clearFilters())
const changePage = page => setPage(page)

  return ( 
<div>

    <Nav/>
  

    {paisBuscado.length === 1 ? 
        <PaisBuscado 
        paisBuscado={paisBuscado}
        cleanCountry={cleanCountry}/>
        : 
        <Listado
        page={page}/>  
    }
  
    <Paginado 
    changePage={changePage}/>

</div>);
}
 
export default Principal;

