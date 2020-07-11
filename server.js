const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const projects = require('./routes/api/projects')

const app = express();

// bodyparser Middleware
app.use(bodyParser.json());

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/gardenworkshop")
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//Use Routes
app.use('/api/projects', projects)

const PORT = process.env.PORT || 5000;

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
