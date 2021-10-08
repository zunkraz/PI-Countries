import React from 'react'

const PaisBuscado = ({paisBuscado, cleanCountry}) => {
    return ( 
        <div>
            <img src={paisBuscado[0].image} alt="image of some country"
            className='divImage'/>
            <h2>{paisBuscado[0].nombre}</h2>
            <h3>{paisBuscado[0].continente}</h3>
            <h3>{paisBuscado[0].id}</h3>
            <h3>{paisBuscado[0].capital}</h3>
            <h3>{paisBuscado[0].area} km<sup>2</sup></h3>

    {paisBuscado[0].Activities[0]? 
        <div>
             <h3>Actividad: {paisBuscado[0].Activities[0].nombre}</h3>
             <h3>Dificultad: {paisBuscado[0].Activities[0].dificultad}</h3>
             <h3>Duración: {paisBuscado[0].Activities[0].duracion}</h3>
             <h3>Temporada: {paisBuscado[0].Activities[0].temporada}</h3>
         </div>
         : <h3>No hay actividades aun</h3>
    }
           
            <button onClick={cleanCountry}>X</button>
            
        </div>

     );
}
 
export default PaisBuscado;