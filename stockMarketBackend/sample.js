

// for code practicing! 
// importing modules 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");


// Creating express app
const app = express();
// defining port number 
const PORT = process.env.PORT || 3000;


// enabling CORS for any unknown origin(https://xyz.example.com)
app.use(cors());

app.use(bodyParser.json());

