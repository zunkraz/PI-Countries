import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { verPaises } from '../actions/actions';
import './styles/Listado.css'



const Listado = ({arrPage}) => {

const arrFilters = useSelector(state => state.filters)
console.log(arrFilters)
 if(arrPage.length === 0){arrPage = arrFilters.slice(0,9)}

 const changeLoading = useSelector(state => state.loading)
 const dispatch = useDispatch()

useEffect( () => {
    if(arrFilters.length === 0 && !changeLoading){dispatch(verPaises())}
})

const showDetails = (e) => alert(e) 
// çTERRRRRMINAAAAAAAAAAAR
// çTERRRRRMINAAAAAAAAAAAR
// çTERRRRRMINAAAAAAAAAAAR

const paises = arrPage.map(element => {
                let valor = <div  
                className='divPaisesInterno'
                onClick={ () => showDetails(element.id)}>

                        <img src={element.image} alt="image of some country"
                        className='divImage'/>
                        <h2>{element.nombre}</h2>
                        <h3>{element.continente}</h3>
                    
                    </div>;
        return valor
});


    return (  
        <div className='divPaises'>{paises}</div>
    );
}
 
export default Listado;