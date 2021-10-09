import React, {useState} from 'react';
import Listado from './Listado';
import Paginado from './Paginado';
import Nav from './Nav';


const Principal = () => {
    
    //useState para activar el paginado
    const [page, setPage] = useState(1) 



//Eliminar el pais
const changePage = page => setPage(page)

  return ( 
<div>

    <Nav changePage={changePage}/>

        <Listado
        page={page}
        changePage={changePage}/>  
  
    <Paginado 
    changePage={changePage}/>

</div>);
}
 
export default Principal;

