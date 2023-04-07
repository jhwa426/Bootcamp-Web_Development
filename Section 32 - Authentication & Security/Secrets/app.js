// npm init -y
// npm install express ejs body-parser
// npm install mongoose@5.3.4
// npm mongoose-encryption
// npm install dotenv
// npm install md5
// npm install bcryptjs
// npm install passport passport-local passport-local-mongoose express-session
// npm install passport-google-oauth20
// npm install mongoose-findorcreate

// secret key store in dotenv
require("dotenv").config();


const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


// mongoose-encryption
const encrypt = require("mongoose-encryption");

// JavaScript function for hashing messages -- very strong password hash
const md5 = require("md5");

// bcrypt password
const bcrypt = require("bcryptjs");

// Cookie session
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

// passport-google-oauth20
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// findOrCreate
const findOrCreate = require("mongoose-findorcreate");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

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


// passport-google-oauth20
passport.use(new GoogleStrategy({
    clientID: process.env.Client_ID,
    clientSecret: process.env.Client_secret,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
    function (accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));



// ------ DB area -----------


// Connect local db server
mongoose.connect("mongodb://localhost:27017/userDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set("useCreateIndex", true);

// Connect db server and create db
// mongoose.connect("mongodb+srv://wodud6359:<password>@cluster0.upzbgb5.mongodb.net/userDB", { useNewUrlParser: true }); // create or connect if does not exist, it creates automatically



const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
    secret: String
});

// mongoose-Authentication 
// userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ["password"] });


// passport-local-mongoose
userSchema.plugin(passportLocalMongoose);

//mongoose-findorcreate
userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);


passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});









// ------ DB area -----------



// GET

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
);

app.get("/auth/google/secrets",
    passport.authenticate("google", { failureRedirect: "/login" }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect("/secrets");
    });

app.get("/login", function (req, res) {
    res.render("login");
});

app.get("/register", function (req, res) {
    res.render("register");
});

app.get("/secrets", function (req, res) {
    User.find({ "secret": { $ne: null } }, function (err, foundUsers) {
        if (err) {
            console.log(err);
        } else {
            if (foundUsers) {
                res.render("secrets", { usersWithSecrets: foundUsers });
            }
        }
    });
});

app.get("/submit", function (req, res) {
    if (req.isAuthenticated) {
        res.render("submit");
    } else {
        res.redirect("/login");
    }
});


app.get("/logout", function (req, res) {
    req.logout(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/");
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


app.post("/submit", function (req, res) {
    const submittedSecret = req.body.secret;

    //Once the user is authenticated and their session gets saved, their user details are saved to req.user.
    // console.log(req.user.id);

    User.findById(req.user.id, function (err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            if (foundUser) {
                foundUser.secret = submittedSecret;
                foundUser.save(function () {
                    res.redirect("/secrets");
                });
            }
        }
    });
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