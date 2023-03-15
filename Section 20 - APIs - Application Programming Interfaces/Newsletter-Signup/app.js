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
// const request = require("request");

// native node - http
const https = require("https");



// Server setup
const app = express();


// app use section

// app use static folder (image, icon)
app.use(express.static("public"));

// app use body-parser
app.use(bodyParser.urlencoded({extended: true}));



// GET
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});


// POST
app.post("/", function(req, res)  {
    
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                //the value is from the form
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const listId = "ba6a0d0bcc";
    const url = `https://us17.api.mailchimp.com/3.0/lists/${listId}`;

    const options = {
        method: "POST",
        auth: "jhwa426:8a7a8d2f2f0918fdeec697e7df6c989a-us17"
    }

    const request = https.request(url, options, function(response) {

        if(response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data) {
            console.log(JSON.parse(data));

        })
    });

    request.write(jsonData);
    request.end();

})

app.post("/failure", function(req, res) {
    res.redirect("/")
})








// Default listen - The server.listen() method creates a listener on the specified port or path.
app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000");
})

// API KEY
// 8a7a8d2f2f0918fdeec697e7df6c989a-us17

// List ID
// ba6a0d0bcc