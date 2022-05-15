const router = require("express").Router();
const collectorRoutes = require("./collector-routes.js");
const artistRoutes = require("./artist-routes.js");
const featureRoutes = require("./feature-routes.js");

router.use("/collectors", collectorRoutes);
router.use("/artists", artistRoutes);
router.use("/features", featureRoutes);

module.exports = router;
