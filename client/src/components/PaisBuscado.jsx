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
            <button onClick={cleanCountry}>X</button>
            
        </div>

     );
}
 
export default PaisBuscado;