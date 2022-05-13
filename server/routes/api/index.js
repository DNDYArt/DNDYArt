const router = require('express').Router();
const collectorRoutes = require('./collector-routes.js');

router.use('/collectors', collectorRoutes);

module.exports = router;
