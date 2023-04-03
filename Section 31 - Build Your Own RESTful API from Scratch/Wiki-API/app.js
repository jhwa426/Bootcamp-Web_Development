// initialise code Wiki - API

// npm install express ejs body-parser
// npm install mongoose@5.3.4

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));




// ------ DB area -----------


// Connect local db server
mongoose.connect("mongodb://localhost:27017/WikiDB", { useNewUrlParser: true }); // create or connect if does not exist, it creates automatically

// Connect db server and create db
// mongoose.connect("mongodb+srv://wodud6359:<password>@cluster0.upzbgb5.mongodb.net/wikiDB", { useNewUrlParser: true }); // create or connect if does not exist, it creates automatically


// Connect DB server (mongo DB Atlas)
// Connect to Cluster0
// mongo "mongodb+srv://cluster0.upzbgb5.mongodb.net/myFirstDatabase" --username wodud6359



const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("Article", articleSchema);


// ------ DB area -----------


// RESTfull API
// - GET(READ), POST(CREATE), PUT(UPDATE), PATCH(UPDATE), DELETE.

// GET(READ)
app.get("/articles", function (req, res) {
    // MQL (mongo query language - find)
    Article.find({}, function (err, foundArticles) {
        if (!err) {
            res.send(foundArticles);
        } else {
            res.send(err);
        }
    });
});






app.listen(3000, function () {
    console.log("Server started on port 3000");
});