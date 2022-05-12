const router = require('express').Router();
const userRoutes = require('./collector-routes.js');

router.use('/users', userRoutes);

module.exports = router;
