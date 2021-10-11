import React, {Fragment, useEffect} from 'react'
import { clearFilters, verDetalle } from '../actions/actions'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import './styles/PaisBuscado.css'

const PaisBuscado = ({id}) => {

    const dispatch = useDispatch();
    const cleanCountry= () => dispatch(clearFilters());
    const aux = useSelector(state => state.aux);

    useEffect(() => {
        if(!aux.id){
             dispatch(verDetalle(id)) 
        }
    })

    let actividades
    if(aux.Activities && aux.Activities.length){
        actividades = aux.Activities.map(element => {
        let act = 
        <tr key={element.nombre}>
            <td>{element.nombre}</td>
            <td>{element.dificultad}</td>
            <td>{element.duracion}</td>
            <td>{element.temporada}</td>
        </tr>
        return act
       })
    }
    return (  
        <Fragment>
             { aux.id ? 

            <div className='mainDetalle'>
            <img className='fondo' src={aux.image} alt="" />
            <div className='detallePais'>
                <img src={aux.image} alt="some country"
                className='divImageDetalle'/>
                <h2>{aux.nombre}</h2>
                <h3>Continente: {aux.continente}</h3>
                <h3>Código: {aux.id}</h3>
                <h3>Capital: {aux.capital}</h3>
                <h3>Área: {aux.area} km<sup>2</sup></h3>
            <Link to={'/principal'}><button  className='btnAtras' onClick={cleanCountry}>Volver</button> </Link>
            </div>

            {aux.Activities && aux.Activities.length ?
            <table>
                <caption>Actividades</caption>
                <tbody>
                <tr>
                <th>Nombre</th>
                <th>Dificultad</th>
                <th>Duración</th>
                <th>Temporada</th>
                </tr>
                    {actividades}
                </tbody>
            </table>
                : <h3 className='sinActividad'>¡No hay Actividades aún!</h3>
            }        
            </div>    
                
            :
            <h2 className='spanListado'>404</h2>
            }   
        </Fragment> 
         
    
     );
}
 
export default PaisBuscado;