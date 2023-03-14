// Setup : https://expressjs.com/en/starter/hello-world.html

// npm init
// npm install express
// node app.js

// npm install -g nodemon
// nodemon calculator.js

// npm install body-parser

// node express
const { log } = require('console');
const express = require('express');

// native node - http
const https = require("https");

// body-parser
const bodyParser = require("body-parser");

// Server
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));



// GET
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")

});



// POST
app.post('/', function (req, res) {
    const query = req.body.cityName;
    const apiKey = "6b54f887178751bfba9258a0fefd2237"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            // Parse to JSON file (hex to JSON)
            const weatherData = JSON.parse(data);
            // console.log(weatherData);
            
            // indexing temp
            // temp
            const temp = weatherData.main.temp;

            // description
            const weatherDescription = weatherData.weather[0].description;

            // icon
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

            // res multiple writes and send
            res.write("<p>The weather is currently " + weatherDescription + ".</p>");
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celsius.</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send();

        })
    });
})













// Hexadecimal
// <Buffer 7b 22 63 6f 6f 72 64 22 3a 7b 22 6c 6f 6e 22 3a 31 37 34 2e 37 36 36 37 2c 22 6c 61 74 22 3a 2d 33 36 2e 38 36 36 37 7d 2c 22 77 65 61 74 68 65 72 22 ... 425 more bytes>

            // const object = {
            //     name: "Jeff",
            //     age: "28"
            // }
            // console.log(JSON.stringify(object));


// Default listen - The server.listen() method creates a listener on the specified port or path.
app.listen(port, function() {
    console.log(`Example app listening on port ${port}`);
});