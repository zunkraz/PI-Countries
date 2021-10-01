import React from 'react';
import Listado from './Listado';
import Paginado from './Paginado';

import {useSelector} from 'react-redux'

const Principal = () => {
const cantidadDePaginas = useSelector(state => state.paises.length)
const handleSubmit = (e) => {
    e.preventDefault();
}


    return ( 
        <div>
        <nav>
            <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Escribe un Pais aquí"
                 />
                <button>Buscar Pais</button>

                <select name='select'>
                     <option value="filter" defaultValue>Filtrar por:</option>
                     <option value="">Continente</option>
                     <option value="">Actividad Turistica</option>
                </select>

                <select name="order">
                    <option value='' defaultValue>Ordenar Por</option>
                    <option value=''>A-Z</option>
                    <option value=''>Z-A</option>
                </select>
            </form>
        </nav>
    <Listado/>

    <Paginado 
    cantidadDePaginas={cantidadDePaginas}
    />
</div>);
}
 
export default Principal;