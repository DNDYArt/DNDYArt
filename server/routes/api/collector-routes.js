const router = require('express').Router();

// Import any controllers needed here
const { getAllCollectors, getCollectorById, createCollector, updateCollectorById, deleteCollectorById, verifyCollectorLogin } = require('../../controllers/collector-controller');

// Declare the routes that point to the controllers above
router.route('/')
  .get(getAllCollectors)
  .post(createCollector);
router.route('/:id')
  // .get(getCollectorById)
  // .put(updateCollectorById)
  // .delete(deleteCollectorById);
router.route('/login').put(verifyCollectorLogin)

module.exports = router;
