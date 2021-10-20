const Location = require('../models/Location.js');

const postLocation = (req,res)=>{
    let location = new Location({
        name: req.body.name,
        description:req.body.description
        }); 
    location.save()
.then(result=>{
    res.set('content-location', `/api/v1/locations/${location._id}`);
    res.status(201).json({
    data:location,
    url:`/api/v1/locations/${location._id}`

    })}
    ) 
.catch(error=>{res.status(500).send(error)});
}


const getLocations = (req, res) => {
    Location.find({}).exec()
        .then(results => {
            res.status(201).json(results)
        })
        .catch(error=>res.status(500).send(error))

}

const getTheLocation = (req, res) => {
    Location.findOne({ "_id": req.params.id }).exec()
        .then(results => {
            res.status(201).json(results)
        })
        .catch(error => res.status(500).send(error))
}

module.exports = {
    postLocation,
    getLocations,
    getTheLocation
}