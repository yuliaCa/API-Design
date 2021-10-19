const router = require('express').Router({mergeParams:true});

const locationRouter = require('./locations.js');
const characterRouter = require('./characters.js');


router.use('/:type',characterRouter );
router.use('/locations', locationRouter);


module.exports = router;