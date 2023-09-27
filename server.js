const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

const dBConnect = require("./config/db_connection");
dBConnect();

app.use(express.json());
app.use("/api-exp", require("./routes/movie_routes"));

app.listen(port,()=>{console.log(`http://localhost:${port}`)});

