//jshint esversion:6
// npm install init
// npm install mongoose@5.3.4 --> // current mongoose version is 7.0.3 but we use 5.3.4

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { mongo } = require('mongoose');
// const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// ------ DB area -----------



// Connect db server and create db
mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true}); // create or connect if does not exist, it creates automatically

// Create new schema
const itemSchema = new mongoose.Schema({
    name : String
});

// Create a collection (mongo model uses capital letter)
const Item = mongoose.model("Item", itemSchema);

// Create a new table
const item1 = new Item ({
    name : "Welcome to your To - do List"
});

const item2 = new Item ({
    name: "Add the to-do object below"
});

const item3 = new Item ({
    name: "Ex : Coding"
});

const defaultItems = [item1, item2, item3];





// ------ DB area -----------



app.get("/", function (req, res) {



    Item.find({}, function(err, foundItems) {

      if (foundItems.length === 0) {
        // insert Many 
        Item.insertMany(defaultItems, function(err) {
            if (err) {
              console.log(err);
            } else {
              console.log("Successfully inserted items!");
            }
        });
        res.redirect("/");
      } else {
          res.render("list", { listTitle: "Today", newListItems: foundItems });
      }
    });
});

  

app.post("/", function (req, res) {

    const itemName = req.body.newItem;

    const item = new Item({
        name: itemName
    });

    item.save();
    
    res.redirect("/");

});

// delete route
app.post("/delete", function (req, res) {
    const checkedItemId = req.body.checkbox;

    Item.findByIdAndRemove(checkedItemId, function(err) {
        if (!err) {
          console.log("Successfully deleted selected items!");
          res.redirect("/");
        }
    })

    

  });

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});