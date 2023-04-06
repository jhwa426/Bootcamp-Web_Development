// npm init -y
// npm install express ejs body-parser
// npm install mongoose@5.3.4
// npm mongoose-encryption
// npm install dotenv
// npm install md5
// npm install bcryptjs

// secret key store in dotenv
require('dotenv').config();


const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');


// mongoose-encryption
const encrypt = require("mongoose-encryption");

// JavaScript function for hashing messages -- very strong password hash
const md5 = require('md5');

// bcrypt password
const bcrypt = require('bcryptjs');



const app = express();

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));


// ------ DB area -----------


// Connect local db server
mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });

// Connect db server and create db
// mongoose.connect("mongodb+srv://wodud6359:<password>@cluster0.upzbgb5.mongodb.net/userDB", { useNewUrlParser: true }); // create or connect if does not exist, it creates automatically



const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// mongoose-Authentication 
// userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ["password"] });



const User = mongoose.model("User", userSchema);





// ------ DB area -----------



// GET

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.get("/register", function (req, res) {
    res.render("register");
});






// POST
app.post("/register", function (req, res) {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        const newUser = new User({
            email: req.body.username,
            password: hash
        });

        newUser.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                res.render("secrets");
            }
        });
    });


});

app.post("/login", function (req, res) {
    const userName = req.body.username;
    const password = md5(req.body.password);

    User.findOne({ email: userName }, function (err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            if (foundUser) {
                if (foundUser.password === password) {
                    res.render("secrets");
                }
            }
        }
    })
})







app.listen(3000, function () {
    console.log("Server started on port 3000");
});