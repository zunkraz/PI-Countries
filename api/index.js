//Principal
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');
const { Country } = require('./src/db.js')
//for use  fetch 
 const fetch = require('cross-fetch');

// Syncing all the models at once. // conexion de la base de datos
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

   const paises = await fetch('https://restcountries.com/v2/all')
                  .then(response => response.json())
                  .then(data => data.map(pais => { 
                      return Country.create({
  
                          id: pais.alpha3Code,  
                          nombre:pais.name,
                          image:pais.flags[1],
                          continente:pais.continent,
                          capital: pais.capital,
                          subregion: pais.region,
                          area: pais.area,
                          poblacion: pais.population,
                          
                      })
                  }));
Promise.all(paises).then(
  response => console.log('Pais Cargado')
);
            
  })        
});

// {
//   id: pais.cca3,  
//   nombre:pais.name.common,
//   image:pais.flags[1],
//   contienente:pais.region,
//   capital: pais.capital[0],
//   subregion: pais.subregion,
//   area: pais.area,
//   poblacion: undefined,
//   }