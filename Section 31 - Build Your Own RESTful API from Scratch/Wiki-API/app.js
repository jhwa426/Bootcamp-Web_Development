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




// --------------------------

// RESTfull API
// - GET(READ), POST(CREATE), PUT(UPDATE), PATCH(UPDATE), DELETE.

// CRUD Operation
// Create : (POST)
// Read : (GET)
// Update : (PUT, PATCH)
// Delete : (DELETE)

// --------------------------

// --------------------------Requests Targetting all articles--------------------------
// app.route()

app.route("/articles")
    .get(function (req, res) {
        Article.find({}, function (err, foundArticles) {
            if (!err) {
                res.send(foundArticles);
            } else {
                res.send(err);
            }
        });
    })

    .post(function (req, res) {
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
        newArticle.save(function (err) {
            if (!err) {
                res.send("Successfully added a new article");
            } else {
                res.send(err);
            }
        });
    })

    .delete(function (req, res) {
        Article.deleteMany({}, function (err) {
            if (!err) {
                res.send("Successfully deleted all articles");
            } else {
                res.send(err);
            }
        });
    });

// --------------------------Requests Targetting a specific article--------------------------

app.route("/articles/:articleTitle")
    .get(function (req, res) {
        Article.findOne({ title: req.params.articleTitle }, function (req, foundArticle) {
            if (foundArticle) {
                res.send(foundArticle);
            } else {
                res.send("No articles matching that title was found");
            }
        });
    })

    .put(function (req, res) { // all items in object will be updated
        Article.update(
            { title: req.params.articleTitle },
            { title: req.body.title, content: req.body.content },
            { overwrite: true },
            function (err) {
                if (!err) {
                    res.send("Successfully updated an article");
                } else {
                    res.send(err);
                }
            }
        );
    })

    .patch(function (req, res) { // only selected object will be updated
        Article.update(
            { title: req.params.articleTitle },
            { $set: req.body },
            function (err) {
                if (!err) {
                    res.send("Successfully updated an article");
                } else {
                    req.send(err);
                }
            }
        );
    })

    .delete(function (req, res) {
        Article.deleteOne(
            { title: req.params.articleTitle },
            function (err) {
                if (!err) {
                    res.send("Successfully deleted an article");
                } else {
                    res.send(err);
                }
            }
        );
    });










// refactored a single route

// GET(READ)
// app.get("/articles", function (req, res) {
//     // MQL (mongo query language - find)
//     Article.find({}, function (err, foundArticles) {
//         if (!err) {
//             res.send(foundArticles);
//         } else {
//             res.send(err);
//         }
//     });
// });




// POST(CREATE)
// app.post("/articles", function (req, res) {
//     const newArticle = new Article({
//         title: req.body.title,
//         content: req.body.content
//     });
//     newArticle.save(function (err) {
//         if (!err) {
//             res.send("Successfully added a new article");
//         } else {
//             res.send(err);
//         }
//     });
// });




// DELETE
// app.delete("/articles", function (req, res) {
//     Article.deleteMany({}, function (err) {
//         if (!err) {
//             res.send("Successfully deleted all articles");
//         } else {
//             res.send(err);
//         }
//     });
// });


// app.route()
// You can create chainable route handlers for a route path by using app.route(). 
// Because the path is specified at a single location, creating modular routes is helpful, as is reducing redundancy and typos. 
// For more information about routes, see: Router()

// EX

// app.route('/book')
//     .get((req, res) => {
//         res.send('Get a random book')
//     })
//     .post((req, res) => {
//         res.send('Add a book')
//     })
//     .put((req, res) => {
//         res.send('Update the book')
//     })







// PUT(UPDATE), PATCH(UPDATE)










app.listen(3000, function () {
    console.log("Server started on port 3000");
});