const express = require('express');
const router = express.Router();


const countries = require('./country.js');
const activity = require('./activity.js');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/countries', countries)
router.use('/activity', activity)


module.exports = router

