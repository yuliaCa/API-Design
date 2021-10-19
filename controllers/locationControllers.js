// const Location = require('../models/Animal');

// const postAnimal = (req, res) => {
//     let newAnimal = new Animal({
//         type: req.body.type,
//         numberOfLegs: req.body.numberOfLegs
//     })
//     newAnimal.save()
//         .then(result => {
//             res.json({
//                 data: newAnimal,
//                 url: `/api/animals/${newAnimal._id}`
//             })
//         })
//         .catch(error => res.status(500).send(error))
// }

// const getAnimal = (req, res) => {
//     Animal.find({}).exec()
//         .then(results => {
//             res.json(results)
//         })

// }

// const getOneAnimal = (req, res) => {
//     Animal.findOne({ "_id": req.params.id }).exec()
//         .then(results => {
//             res.json(results)
//         })
//         .catch(error => res.status(500).send(error))
// }

// module.exports = {
//     postAnimal,
//     getAnimal,
//     getOneAnimal
// }