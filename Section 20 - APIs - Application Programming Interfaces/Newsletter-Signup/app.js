'use strict'

// npm init

// npm install express request body-parser

// npm install -g nodemon //sudo npm install -g nodemon - MAC

// node app.js
// nodemon app.js


// node express
const express = require('express');

// body-parser
const bodyParser = require("body-parser");

// request
const request = require("request");


// Server setup
const app = express();


app.use(bodyParser.urlencoded({extended: true}));



// GET
app.get("/", function(req, res) {
    res.send("Hi");
    console.log("done");
});


// Default listen - The server.listen() method creates a listener on the specified port or path.
app.listen(3000, function() {
    console.log("Server is running on port 3000");
})