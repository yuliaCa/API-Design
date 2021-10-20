const Character = require('../models/Character.js');

const postCharacter = (req,res)=>{
    let character = new Character({
        name: req.body.name,
        powers:req.body.powers,
        type: req.body.type,
        hp: req.body.hp
        }); 
       
    character.save()
.then(result=>{
    res.set('content-location', `/api/v1/${character.type === "hero" ? "heroes" : "villains"}/${character._id}`);
    res.status(201).json({
    data:character,
    description: character.description,
    url:`/api/v1/${character.type === "hero" ? "heroes" : "villains"}/${character._id}`

    })}
    ) 
.catch(error=>{res.status(500).send(error)});
}


const getHeroes = (req, res,next) => {
    if (req.params.type === 'heroes'){
    Character.find({"type":"hero"}).exec()
        .then(results => {
            res.status(200).json(results)
        })
        .catch(error=>res.status(500).send(error))
    } else next();
}

const getVillains = (req, res) => {
    if(req.params.type === 'villains'){
    Character.find({"type":"villain"}).exec()
        .then(results => {
            res.status(200).json(results)
        })
        .catch(error=>res.status(500).send(error))
    }
}

const getTheCharacter = (req, res) => {
Character.findOne({ "_id": req.params.id }).exec()
        .then(results => {
            res.status(200).json(results)
        })
        .catch(error => res.status(500).send(error))
}

module.exports = {
    postCharacter,
    getHeroes,
    getVillains,
    getTheCharacter
    
}