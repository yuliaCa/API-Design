const router = require('express').Router();

// // const { getTheHero, getAllHeroes, postHero, getTheVillain, getAllVillains, postVillain } = require('../controllers/characterController.js');

router.get('/:type/:id',(req,res)=>{
    if(req.params.type === 'heroes'){
        res.send('The HERO is here')
    } else if (req.params.type === 'villains'){
        res.send(`Villain with ID ${req.params.id}`)
    }
})

router.get('/:type',(req,res)=>{
    if(req.params.type === 'heroes'){
        res.send(`I am one of ${req.params.type}`)
    } else if (req.params.type === 'villains'){
        res.send(`I DONT want to be one of ${req.params.type}`)
    }
})

router.post('/:type', (req,res)=>{
     if(req.params.type === 'heroes'){
       res.json(req.body);
    } 
})


module.exports = router;