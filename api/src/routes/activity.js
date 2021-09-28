const router = require('express').Router();
const {Country, Activity} = require('../db');

router.post('/', async (req,res)=> {
   const {nombre,dificultad,duracion,temporada} = req.body;
    const actividad = await Activity.create({
        nombre,
        dificultad,
        duracion,
        temporada
    })

    res.send('Se Creo la actividad')
})

module.exports = router;
