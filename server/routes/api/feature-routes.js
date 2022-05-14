const router = require('express').Router();

// Import any controllers needed here
const { getAllFeatures, createFeature, purchaseOutFeature } = require('../../controllers/feature-controller');

// Declare the routes that point to the controllers above
router.route('/')
  .get(getAllFeatures)
  .post(createFeature);

router.route('/purchaseout/').delete(purchaseOutFeature)

module.exports = router;
