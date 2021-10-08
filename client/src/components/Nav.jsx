import React, {Fragment, useState} from 'react'
import {Link} from 'react-router-dom';
import Filters from './Filters';

import { useDispatch} from 'react-redux';
import { busquedaPais} from '../actions/actions';

const Nav = () => {
    const dispatch = useDispatch()

    // NUEVO 15:24
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
        // NUEVO 15:24


    }
    return ( 
        <Fragment>
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
                <Link to='/actividad'>Crear Actividad</Link>
    
                <Filters />
            </nav>
            {/* //NUEVO 15:24 */}
              {error === true ? <div>Este Campo no Puede Estar Vacío</div> : null}
        </Fragment>
     );
}
 
export default Nav;
// agregue la 5, 40 9-21, 8, 9 traje fragment,usestate y usedispatch y cambie los argumentos que recibe la funcion 
// {handleSubmit,setSearchCountry,searchCountry}