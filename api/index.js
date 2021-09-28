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
    console.log('%s listening at 3001');

   const paises = await fetch('https://restcountries.com/v3/all')
                  .then(response => response.json())
                  .then(data => data.map(pais => { 
                      return Country.create({
  
                          id: pais.cca3,  
                          nombre:pais.name.common,
                          image:pais.flags[1],
                          continente:pais.region,
                          capital: pais.capital && pais.capital[0],
                          subregion: pais.subregion,
                          area: pais.area,
                          
                      })
                  }));
Promise.all(paises).then(
  response => console.log('Pais Cargado')
);
            
  })        
});
