// jshint esversion:6

// Setup : https://expressjs.com/en/starter/hello-world.html

// npm init
// npm install express
// node calculator.js

// npm install -g nodemon
// nodemon calculator.js

// npm install body-parser



const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

// Simple calculator

// GET
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


// POST
app.post("/", function(req, res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});



// BMI Calculator

// GET
app.get('/bmiCalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})


// POST
app.post('/', function (req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = Math.round((weight) / height * height);

    res.send('Your BMI is ' + bmi);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});