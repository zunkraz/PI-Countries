import React from 'react';
import {useSelector} from 'react-redux'
import './styles/Paginado.css'
 
const Paginado = ({changePage,page}) => {

    const arrFilters = useSelector(state => state.filters)
    const pagina = [];

    
    let renderPaginas = Math.ceil(1 + (arrFilters.length -9)/10);
    for(let i= 1; i<=renderPaginas; i++){
        pagina.push(<span id={i}  className={i === page ? 'page pageselected' : 'page'} key={i} onClick={() => changePage(i)}>{i}</span>)
    }

    return ( 
        <div className='main'>{pagina}</div>
     );
}
 
export default Paginado;