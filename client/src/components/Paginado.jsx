import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


const Paginado = ({arrFilters, changePage}) => {
const pagina = [];
    let renderPaginas = Math.ceil(arrFilters.length/10);
    for(let i= 1; i<=renderPaginas; i++){
        pagina.push(<span id={i}><Link to='#' onClick={() => changePage(i)}>{i}</Link></span>)
    }

    return ( 
        <Fragment>{pagina}</Fragment>
     );
}
 
export default Paginado;