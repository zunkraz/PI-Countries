import React, {useState} from 'react';
import Listado from './Listado';
import Paginado from './Paginado';
import PaisBuscado from './PaisBuscado';
import Nav from './Nav';


import { busquedaPais,clearFilters} from '../actions/actions';
import { useDispatch, useSelector} from 'react-redux';


const Principal = () => {
    
    //useState para activar el paginado
    const [arrPage, setPage] = useState([]) 
    //BUSQUEDA DEL PAIS
    const dispatch = useDispatch()
    const [searchCountry, setSearchCountry] = useState()
    const [error, setError] = useState(false)
    
    const handleSubmit = e => {
        e.preventDefault()
        //Validaciones
        if(searchCountry === ''){return setError(true)}
        setError(false)
        //Envio de solicitud
        dispatch(busquedaPais(searchCountry))
        //Limpiar el input
        setSearchCountry('')
    }

const paisBuscado = useSelector(state => state.filters)
//Eliminar el pais
const cleanCountry= () => dispatch(clearFilters())
const changePage = arr => setPage(arr)

  return ( 
<div>
    {error === true ? <div>Este Campo no Puede Estar Vacío</div> : null}

    <Nav 
   setSearchCountry={setSearchCountry}
   handleSubmit={handleSubmit}
   searchCountry={searchCountry}
   />
  

    {paisBuscado.length === 1 ? 
        <PaisBuscado 
        paisBuscado={paisBuscado}
        cleanCountry={cleanCountry}/>
        : 
        <Listado
        arrPage={arrPage}/>  
    }
  
    <Paginado 
    changePage={changePage}/>

</div>);
}
 
export default Principal;