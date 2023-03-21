// EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.
// npm install express body-parser nodemon

// var : has the function or global scope.

// let : has the block scope.

// const : has the block scope.
// - security
// - thread safety
// - reduce human mistake



const express = require('express');
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

// creates collection
const items = ["Coding", "Study", "Workout"];
const workItems = [];

// example
const playgrounds = ["This is a play ground", "This is a test"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));


// Before refactoring date.js

// app.get('/', function (req, res) {

//     let today = new Date();
//     let currentDay = today.getDay();

//     //// less than 5 (do if statement) more than 5 (do switch statement)

//     // switch(currentDay) {
//     //     case 0:
//     //         day = "Sunday";
//     //         break;
//     //     case 1:
//     //         day = "Monday";
//     //         break;
//     //     case 2:
//     //         day = "Tuesday";
//     //         break;
//     //     case 3:
//     //         day = "Wednesday";
//     //         break;
//     //     case 4:
//     //         day = "Thursday";
//     //         break;
//     //     case 5:
//     //         day = "Friday";
//     //         break;   
//     //     case 6:
//     //         day = "Saturday";
//     //         break;

//     //     default:
//     //         console.log("Error: current day is equal to " + currentDay);
//     // }

//     let options = {
//         weekday: "long",
//         year: "numeric",
//         month: "long",
//         day: "numeric"
//     };

//     let day = today.toLocaleDateString("en-NZ", options);

//     // views/list.ejs file must be in there and it pairs keys : values  ex(newListItems: day, newListItems: items )

//     res.render("list", {
//         listTitle: day,
//         newListItems: items
//     });

// });


app.get('/', function (req, res) {

    const day = date.getDate(); // just for a day - let day = date.getDay();

    res.render("list", {
        listTitle: day,
        newListItems: items
    });

});

app.post('/', function (req, res) {

    const item = req.body.newItem; // body-parser method brings " name='newItem' " 

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");

    } else if (req.body.list === "Playground") {
        playgrounds.push(item);
        res.redirect("/playground");

    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.get("/about", function(req, res) {
    res.render("about");
});


app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    });

});

// Example GET, POST
app.get("/playground", function (req, res) {
    res.render("list", {
        listTitle: "Playground",
        newListItems: playgrounds
    });

});

// Example POST
// app.post('/playground', function (req, res) {
//     let item = res.body.newItem;

//     playgrounds.push(item);

//     res.redirect("/playground");

// });










app.listen(3000, function () {
    console.log("Server is running on port 3000");
});