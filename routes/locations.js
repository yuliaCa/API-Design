const router = require('express').Router();
const { postLocation,getLocations,getTheLocation } = require('../controllers/locationControllers.js');

router.get('/', getLocations)

router.get('/:id', getTheLocation)

router.post('/',postLocation )

module.exports = router;