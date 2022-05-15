const router = require("express").Router();

// Import any controllers needed here
const {
	getAllArtists,
	createArtist,
	verifyArtistLogin,
} = require("../../controllers/artist-controller");

// Declare the routes that point to the controllers above
router.route("/").get(getAllArtists).post(createArtist);
router.route("/:id");
router.route("/login").put(verifyArtistLogin);

module.exports = router;
