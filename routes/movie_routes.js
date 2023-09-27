const express = require("express");
const router = express.Router();

const {
    createMovies,
    getAllMovies
}= require("../controllers/movie_controllers");

router.post("/create-movies", createMovies);
router.get("/get-all-movies", getAllMovies);

module.exports = router;