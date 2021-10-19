const router = require('express').Router();
// const { getTheLocation, getAllLocations, postLocation } = require('../controllers/locationController.js');

router.get('/', (req,res)=>{
    res.send('Locations All')
})

router.get('/:id', (req,res)=>{
    res.send(`Locations ID ${req.params.id}`)
})

router.post('/', (req,res)=>{
    res.json(req.body)
})

module.exports = router;