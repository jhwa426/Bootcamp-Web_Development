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


const app = express();

// creates collection
let items = ["Buy food", "Coding", "Study"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));



app.get('/', function (req, res) {
    
    let today = new Date();
    let currentDay = today.getDay();

    //// less than 5 (do if statement) more than 5 (do switch statement)

    // switch(currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;   
    //     case 6:
    //         day = "Saturday";
    //         break;

    //     default:
    //         console.log("Error: current day is equal to " + currentDay);
    // }

    let options = { 
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    let day = today.toLocaleDateString("en-NZ", options);

    res.render("list", {
        kindOfDay: day,
        newListItems: items
    });

});


app.post('/', function (req, res) {
    let item = req.body.newItem;

    items.push(item);

    res.redirect("/");

});





app.listen(3000, function () {
    console.log("Server is running on port 3000");
});