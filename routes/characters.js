const router = require('express').Router();

const { getTheHero, getAllHeroes, postHero, getTheVillain, getAllVillains, postVillain } = require('../controllers/characterController.js');

router.get('/:type/:id',(req,res)=>{
    if(req.params.type === 'heroes'){
        getTheHero
    } else if (req.params.type === 'villains'){
        getTheVillain
    }
})

router.get('/:type', (req,res)=>{
     if(req.params.type === 'heroes'){
        getAllHeroes
    } else if (req.params.type === 'villains'){
        getAllVillains
    }
})

router.post('/', (req,res)=>{
     if(req.params.type === 'heroes'){
        postHero
    } else if (req.params.type === 'villains'){
        postVillain
    }
})




module.exports = router;