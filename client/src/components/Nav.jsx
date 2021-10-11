import React, {Fragment, useState} from 'react'
import {Link} from 'react-router-dom';
import Filters from './Filters';
import './styles/Nav.css'
import { useDispatch, useSelector} from 'react-redux';
import { busquedaPais} from '../actions/actions';

const Nav = ({changePage}) => {
    const dispatch = useDispatch()
    const error404 = useSelector(state => state.error)
 
    const [searchCountry, setSearchCountry] = useState()
    const [error, setError] = useState(false)
    const handleSubmit = e => {
        e.preventDefault()
        //Envio de solicitud
        dispatch(busquedaPais(searchCountry))
        //Limpiar el input
        setSearchCountry('')
    }
const handleChange = e => {
    setSearchCountry(e.target.value)
    if(e.target.value === ''){return setError(true)}
        setError(false)
}
    return ( 
        <Fragment>
            <nav className='mainNav'>
                <form onSubmit={handleSubmit} className='formNav'>
                <input 
                    className='inputNav'
                    type="text"
                    value={searchCountry}
                    placeholder="Escribe un Pais aquí"
                    onChange={handleChange}
                     />    
                     <input type='submit' value='Buscar' disabled={error} className={error ? 'btnBuscarDisable' : 'btnBuscar'}/>
                </form>
                <Link to='/actividad' className='btnCrear'>Crear Actividad</Link>
    
                <Filters changePage={changePage}/>
            </nav>
            {error404 ? <div className='error'>{error404}</div> : null}
        </Fragment>
     );
}
 
export default Nav;
