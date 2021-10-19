const router = require('express').Router({mergeParams:true});

const locationRouter = require('./locations.js');
const characterRouter = require('./characters.js');

router.use('/locations', locationRouter);
router.use('/', characterRouter);



module.exports = router;