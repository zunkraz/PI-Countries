import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { verPaises } from '../actions/actions';
import './styles/Listado.css'



const Listado = () => {

const getCountry =  useSelector(state => state.paises)
const changeLoading = useSelector(state => state.loading)
const dispatch = useDispatch()

useEffect( () => {
    if(getCountry.length === 0 && !changeLoading){dispatch(verPaises())}
})

let paises = getCountry.map(element => {
                let valor = <div  className='divPaisesInterno'>

                        <img src={element.image} alt="image of some country"
                        className='divImage'/>
                        <h2>{element.nombre}</h2>
                        <h3>{element.continente}</h3>
                    
                    </div>;
        return valor
});
paises=paises.slice(0,10)


    return (  
        <div className='divPaises'>{paises}</div>
    );
}
 
export default Listado;