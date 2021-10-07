import React from 'react'
import {Link} from 'react-router-dom';
import Filters from './Filters';

const Nav = ({handleSubmit,setSearchCountry,searchCountry}) => {

    return ( 
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
     );
}
 
export default Nav;