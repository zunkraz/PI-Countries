import React, {useState} from 'react';
import Listado from './Listado';
import Paginado from './Paginado';

import {useSelector} from 'react-redux'

// //PRUEBA
import { busquedaPais } from '../actions/actions';
import { useDispatch } from 'react-redux';
import { clearFilters } from '../actions/actions';
const Principal = () => {
    
    //useState para activar el paginado
    const [arrPage, setPage] = useState([]) 
    const arrFilters = useSelector(state => state.filters) //con esto traemos el arreglo de la db

    const changePage = id => setPage(arrFilters.slice(id*10-10,id*10)) //con esto garantizamos el paginado

    //BUSQUEDA DEL PAIS
    const dispatch = useDispatch()
    const [searchCountry, setSearchCountry] = useState()
    const [error, setError] = useState(false)
    
    const handleSubmit = e => {
        e.preventDefault()
        //Validaciones
        if(searchCountry === ''){return setError(true)}
        setError(false)
        //Envio de solicitud
        dispatch(busquedaPais(searchCountry))
        //Limpiar el input
        setSearchCountry('')
    }

const paisBuscado = useSelector(state => state.filters)
//Eliminar el pais
const cleanCountry= () => dispatch(clearFilters())
   
  return ( 
<div>
        <nav>
            <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={searchCountry}
                placeholder="Escribe un Pais aquí"
                onChange={e => setSearchCountry(e.target.value)}
                 />    
                 <input type='submit' value='Buscar'/>
            </form>
        </nav>

    {error === true ? <div>Este Campo no Puede Estar Vacío</div> : null}

    {paisBuscado.length === 1 ? 
        <div>
            <img src={paisBuscado[0].image} alt="image of some country"
            className='divImage'/>
            <h2>{paisBuscado[0].nombre}</h2>
            <h3>{paisBuscado[0].continente}</h3>
            <button onClick={cleanCountry}>X</button>
        </div>
         : 
        <Listado
        arrPage={arrPage}
        arrFilters={arrFilters}/>  
        }
  

    <Paginado 
    arrFilters={arrFilters}
    changePage={changePage}
    />
</div>);
}
 
export default Principal;