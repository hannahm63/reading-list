// Require package dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const logger = require('morgan');

// Initialize express app
const app = express();

// Declare port
const PORT = process.env.PORT || 3001;

// declaring which database to use based on environment (development or production)
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlinesDB";

// using morgan to log requests
app.use(logger("dev"));

// Express middleware to return body as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// making static folders public
app.use(express.static("public"));

// connecting to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// starting the server
app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});