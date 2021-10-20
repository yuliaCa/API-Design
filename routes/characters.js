const router = require('express').Router();

const { postCharacter, getHeroes, getVillains,getTheCharacter} = require('../controllers/characterControllers.js');

router.get('/:type/:id',getTheCharacter)

router.get('/:type',getHeroes,getVillains)

router.post('/:type', postCharacter)


module.exports = router;