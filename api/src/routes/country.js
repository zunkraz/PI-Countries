const router = require('express').Router();
const {Country, Activity} = require('../db');

router.get('/', async (req,res)=> {
    const {name} = req.query;
    if(name){
        const pais = await Country.findOne({
            where: {nombre: name} 
        })
        if(!pais) return res.status(404).send('El Pais no existe')

        return res.json(pais)
    }
    const Paises = await Country.findAll();
   
    res.json(Paises)
})


router.get('/:idPais', async (req,res)=> {
    const {idPais} = req.params
    const Idpais = await Country.findByPk(idPais,{
        include: Activity
    })

    if(!Idpais){
        return res.status(404).send('error')
      }
    res.json(Idpais)
})



module.exports = router;

