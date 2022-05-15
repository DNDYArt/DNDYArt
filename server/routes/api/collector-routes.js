const router = require("express").Router();

// Import any controllers needed here
const {
	getAllCollectors,
	createCollector,
	verifyCollectorLogin,
} = require("../../controllers/collector-controller");

// Declare the routes that point to the controllers above
router.route("/").get(getAllCollectors).post(createCollector);
router.route("/:id");
router.route("/login").put(verifyCollectorLogin);

module.exports = router;
