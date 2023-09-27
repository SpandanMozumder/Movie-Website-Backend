const asyncHandler = require("express-async-handler");
const MOVIEMODEL = require("../models/movies_models");

//create movies
//public api
const createMovies = asyncHandler(async (req, res) => {
  const { movieName, movieDetails, movieGenre } = req.body;
  if (!movieName) {
    res.status(400).send({
      msg: "Movie name is required",
    });
    throw new Error("Movie already exists!");
  }
  const findAvailableMovies = await MOVIEMODEL.findOne({ movieName });
  if (findAvailableMovies) {
    res.status(401).send({
      msg: "Movie already exists!",
    });
    throw new Error("Movie already exists!");
  }
  const newMovie = {
    movieName,
    movieDetails,
    movieGenre,
  };
  const updateMovieModel = await MOVIEMODEL.create(newMovie);
  if (updateMovieModel) {
    res.status(201).send({
      msg: "movie is succesfully created",
      post: updateMovieModel,
    });
  } else {
    res.status(401).send({
      msg: "network err",
    });
    throw new Error("Movie already exists!");
  }
});

//get all movies
const getAllMovies = asyncHandler(async (req, res) => {
  const findAllMovies = await MOVIEMODEL.find({});
  if (findAllMovies) {
    res.status(200).send({
      msg: "Movie list Found",
      post: findAllMovies,
    });
  } else {
    res.status(401).send({
      msg: "network err or no list found",
    });
    throw new Error("err");
  }
});

module.exports = {
  createMovies,
  getAllMovies
};
