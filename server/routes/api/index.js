const router = require('express').Router();
const collectorRoutes = require('./collector-routes.js');
const artistRoutes = require('./artist-routes.js');

router.use('/collectors', collectorRoutes);
router.use('/artists', artistRoutes);

module.exports = router;
