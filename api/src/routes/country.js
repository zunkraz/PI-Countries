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
        const Paises = (await Country.findAll({
            include: Activity
        })).map(e => (
           
            {
                nombre:e.nombre, 
                continente: e.continente, 
                image: e.image, 
                id: e.id,
                Activities: e.Activities.length 
            }
        ));
        return res.json(Paises);
    }catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
})


router.get('/:idPais', async (req,res)=> {
    const {idPais} = req.params
    try{
        let Idpais = (await Country.findByPk(idPais,{
        include: Activity,
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    })).toJSON()
    Idpais = {...Idpais, Activities: Idpais.Activities.map(e => ({
        nombre: e.nombre,
        dificultad: e.dificultad,
        duracion: e.duracion,
        temporada: e.temporada
        }))
    }
    
    if(!Idpais){
        return res.status(404).send('error')
      }
 
     return res.send(Idpais);
    }catch(error){
        console.log(error)
        return res.status(500).send(error)}
})



module.exports = router;

