import React, {Fragment} from 'react';
import {useSelector} from 'react-redux'

 
const Paginado = ({changePage}) => {

    const arrFilters = useSelector(state => state.filters)
    const pagina = [];

    
    let renderPaginas = Math.ceil(1 + (arrFilters.length -9)/10);
    for(let i= 1; i<=renderPaginas; i++){
        pagina.push(<span id={i} key={i} onClick={() => changePage(i)}>{i}</span>)
    }

    return ( 
        <Fragment><div>{pagina}</div></Fragment>
     );
}
 
export default Paginado;