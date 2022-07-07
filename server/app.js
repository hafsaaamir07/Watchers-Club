const express = require("express");
const cors = require("cors");

// creating varaible to store express methods
const app = express()

//middleware to use
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors());

//exporting app
module.exports = app;

