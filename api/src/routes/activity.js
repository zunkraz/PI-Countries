const router = require('express').Router();
const {Country, Activity} = require('../db');

router.post('/', async (req,res)=> {
    const {nombre,dificultad,duracion,temporada,countries} = req.body;
   try{
    const actividad = await Activity.create({
        nombre,
        dificultad,
        duracion,
        temporada
    })
    await actividad.addCountries(countries)
    return res.send('Se Creo la actividad');

}catch (error){ return res.status(500).send('Algo salio mal '+ error)}
})

module.exports = router;
