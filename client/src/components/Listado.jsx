import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { verDetalle, verPaises } from '../actions/actions';
import { Link } from 'react-router-dom';
import './styles/Listado.css'



const Listado = ({page}) => {

const dispatch = useDispatch()
const arrFilters = useSelector(state => state.filters)
const changeLoading = useSelector(state => state.loading)


let arrPage
if(page === 1){arrPage = arrFilters.slice(0,9)
}else{
    arrPage = arrFilters.slice(page*10-11,page*10-1)
}

useEffect( () => {
    if(arrFilters.length === 0 && !changeLoading){dispatch(verPaises())}
})

const showDetails = e => dispatch(verDetalle(e)) 

let paises
if(arrFilters[0] === 'Nada Que mostrar'){
    paises = <span className='spanListado'>No hay Actividades aún, limpie los filtros</span>
}else{

    paises = arrPage.map(element => {
                   let valor = 
                   <Link to={`/principal/${element.id}`} key={element.id}>
                   <div
                   className='subListado'
                   onClick={() => showDetails(element.id)}>
   
                           <h2 className='nombrePais'>{element.nombre}</h2>
                           <img src={element.image} alt="some country"
                           className='divImage'/>
                           <h3>Continente:</h3>
                           <h2>{element.continente}</h2>
                           <span className='btn'>Ver Pais</span>
                       </div>
                   </Link>
                   
           return valor
   });
}
 
    return (  
    <div className='mainListado'>{paises}</div>

    );
}
 
export default Listado;