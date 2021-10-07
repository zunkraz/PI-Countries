const router = require('express').Router();
const {Country, Activity} = require('../db');

router.get('/', async (req,res)=> {
    let {name} = req.query;

    try{
        if(name){
            name = name[0].toUpperCase() + name.slice(1)
            const pais = await Country.findOne({
                where: {
                    nombre: name
                } 
            })
            if(!pais) return res.status(404).send('El Pais no existe')
            return res.json(pais)
        }
        const Paises = (await Country.findAll()).map(e => (
            {nombre:e.nombre, continente: e.continente, image: e.image, id: e.id}
        ));
        return res.json(Paises);
    }catch(error){
        return res.status(500).send(error)
    }
})


router.get('/:idPais', async (req,res)=> {
    const {idPais} = req.params
    try{
        const Idpais = await Country.findByPk(idPais,{
        include: Activity
    })

    if(!Idpais){
        return res.status(404).send('error')
      }
     return res.json(Idpais);
    }catch(error){return res.tatus(500).send(error)}
})



module.exports = router;

