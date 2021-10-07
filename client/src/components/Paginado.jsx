import React, {Fragment} from 'react';
import {useSelector} from 'react-redux'


const Paginado = ({changePage}) => {

    const arrFilters = useSelector(state => state.filters)
    const pagina = [];

    
    // arrFilters.length/10 ESTO IBA EN RENDERPAGINAS
    let renderPaginas = 26;
    for(let i= 1; i<=renderPaginas; i++){
        pagina.push(<span id={i} onClick={() => changePage(arrFilters.slice(i*10-11,i*10-1))}>{i}</span>)
    }

    return ( 
        <Fragment><div>{pagina}</div></Fragment>
     );
}
 
export default Paginado;