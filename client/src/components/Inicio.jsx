import React from 'react'
import {Link} from 'react-router-dom';
import './styles/Inicio.css'
import pais1 from './styles/imgs/pais1.jpeg'
import pais2 from './styles/imgs/pais2.jpg'
import pais3 from './styles/imgs/pais3.jpg'
import pais4 from './styles/imgs/pais4.jpg'
import pais5 from './styles/imgs/pais5.jpg'
import pais6 from './styles/imgs/pais6.jpg'
import pais12 from './styles/imgs/pais12.jpg'
import pais7 from './styles/imgs/pais7.jpg'
import pais8 from './styles/imgs/pais8.jpg'
import pais9 from './styles/imgs/pais9.jpg'
import pais10 from './styles/imgs/pais10.jpg'
import pais13 from './styles/imgs/pais13.jpg'
import pais14 from './styles/imgs/pais14.jpg'
import pais15 from './styles/imgs/pais15.jpg'
import pais11 from './styles/imgs/pais11.jpg'
import pais16 from './styles/imgs/pais16.jpg'
import inicio from './styles/imgs/inicio.png'





const Inicio = () => {

     return ( 
        <div className='mainInicio'>
            
            <div className='uno'>
                <img src={inicio} alt="not found"  className='welcomes'/>
                
                <Link 
                to={'/principal'}
                className='btnIniciar'>
                Iniciar
                </Link>
            </div>

            <div className='dos'>
                <img className='imageInicio' src={pais1} alt="" />
                <img className='imageInicio' src={pais2} alt="" />
                <img className='imageInicio' src={pais3} alt="" />
                <img className='imageInicio' src={pais4} alt="" />
                <img className='imageInicio' src={pais5} alt="" />
                <img className='imageInicio' src={pais11} alt="" />
                <img className='imageInicio' src={pais6} alt="" />
                <img className='imageInicio' src={pais7} alt="" />
                <img className='imageInicio' src={pais12} alt="" />
                <img className='imageInicio' src={pais13} alt="" />
                <img className='imageInicio' src={pais8} alt="" />
                <img className='imageInicio' src={pais9} alt="" />
                <img className='imageInicio' src={pais14} alt="" />
                <img className='imageInicio' src={pais10} alt="" />
                <img className='imageInicio' src={pais15} alt="" />
                <img className='imageInicio' src={pais16} alt="" />        
            </div>
        </div>
     );
}
 
export default Inicio;