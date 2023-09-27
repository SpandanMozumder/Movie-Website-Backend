const mongoose = require("mongoose");
const moviesSchema = mongoose.Schema(
    {
        movieName:{
            type: String,
            required: true
        },
        movieDetails:{
            type: String,
            default: ""
        },
        movieGenre:{
            type: Array,
            default: []
        },
    },
    {
        timestamps: true
    }
);
const MOVIEMODEL = mongoose.model("MOVIEMODEL", moviesSchema);
module.exports = MOVIEMODEL;