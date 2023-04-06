// npm init -y
// npm install express ejs body-parser
// npm install mongoose@5.3.4
// npm mongoose-encryption
// npm install dotenv
// npm install md5
// npm install bcryptjs
// npm install passport passport-local passport-local-mongoose express-session


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

// Cookie session
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");



const app = express();

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());





// ------ DB area -----------


// Connect local db server
mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

// Connect db server and create db
// mongoose.connect("mongodb+srv://wodud6359:<password>@cluster0.upzbgb5.mongodb.net/userDB", { useNewUrlParser: true }); // create or connect if does not exist, it creates automatically



const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// mongoose-Authentication 
// userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ["password"] });


// passport-local-mongoose
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);


passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());









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

app.get("/secrets", function (req, res) {
    if (req.isAuthenticated) {
        res.render("secrets");
    } else {
        res.redirect("/login");
    }
});

// app.get("/logout", function (req, res) {
//     req.logout();
//     res.redirect("/");
// });

app.post('/logout', function (req, res) {
    req.logout(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }

    });
});



// POST
app.post("/register", function (req, res) {
    User.register({ username: req.body.username }, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            res.redirect("/register");
        }
        else {
            passport.authenticate("local")(req, res, function () {
                res.redirect("/secrets");
            });
        }
    });

});


app.post("/login", function (req, res) {

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function (err) {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function () {
                res.redirect("/secrets");
            });
        }
    })
});



// md5 authentication
// app.post("/register", function (req, res) {

//     const newUser = new User({
//         email: req.body.username,
//         password: md5(req.body.password)
//     });

//     newUser.save(function (err) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.render("secrets");
//         }
//     });
// });


// md5 authentication
// app.post("/login", function (req, res) {
//     const userName = req.body.username;
//     const password = md5(req.body.password);

//     User.findOne({ email: userName }, function (err, foundUser) {
//         if (err) {
//             console.log(err);
//         } else {
//             if (foundUser) {
//                 if (foundUser.password === password) {
//                     res.render("secrets");
//                 }
//             }
//         }
//     });
// });








app.listen(3000, function () {
    console.log("Server started on port 3000");
});