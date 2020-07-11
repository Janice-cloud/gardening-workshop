const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');

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

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
     });
}

const PORT = process.env.PORT || 5000;

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
