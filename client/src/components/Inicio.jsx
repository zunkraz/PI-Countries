import React from 'react'
import {Link} from 'react-router-dom';
import './styles/Inicio.css'


const Inicio = () => {


     return ( 
        <div className='main'>
            <h1>Bienvenido a Paises</h1>
            <Link 
                to={'/principal'}
                className='btnIniciar'>
                Iniciar
            </Link>
        </div>
     );
}
 
export default Inicio;