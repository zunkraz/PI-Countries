import React, {useState} from 'react';
import Listado from './Listado';
import Paginado from './Paginado';
import Nav from './Nav';
import './styles/Principal.css'

const Principal = () => {
    
    //useState para activar el paginado
    const [page, setPage] = useState(1) 



//Eliminar el pais
const changePage = page => setPage(page)

  return ( 
<div className='mainP'>
  
    <Nav changePage={changePage}
    />
  
 
  <div className='panel'>
      <Listado
      page={page}
      changePage={changePage}/>  
   
    
      <Paginado 
      changePage={changePage}
      page={page}/>
   
  </div>

</div>);
}
 
export default Principal;

