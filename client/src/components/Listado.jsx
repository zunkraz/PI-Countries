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

const paises = arrPage.map(element => {
                let valor = 
                <Link to={`/principal/${element.id}`} key={element.id}>
                <div
                className='divPaisesInterno'
                onClick={() => showDetails(element.id)}>

                        <img src={element.image} alt="image of some country"
                        className='divImage'/>
                        <h2>{element.nombre}</h2>
                        <h3>{element.continente}</h3>
                    
                    </div>
                </Link>
                
        return valor
});

    return (  
    <div className='divPaises'>{paises}</div>

    );
}
 
export default Listado;