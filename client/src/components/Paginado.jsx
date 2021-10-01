import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


const Paginado = ({cantidadDePaginas}) => {
//Aqui tengo que poner un arrar que llega por pors que dice la longitud para el paginado
const pagina = [];
    let renderPaginas = cantidadDePaginas/10;
    for(let i= 1; i<=renderPaginas; i++){
        pagina.push(<span><Link to={i}>{i}</Link></span>)
    }

    return ( 
        <Fragment>{pagina}</Fragment>
     );
}
 
export default Paginado;