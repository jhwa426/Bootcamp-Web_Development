// npm install mongodb mongoose or mongoose@5.3.4
// npm install mongoose@5.3.4

// mongodb command - show dbs, use fruitsDB, show collections, [db.fruits.find()]

const mongoose = require("mongoose");

// connect db server and create db
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true}); // create or connect if does not exist, it creates automatically

// Fruit 
// Create schema
const fruitSchema = new mongoose.Schema ({
    name : String,
    rating: Number,
    review: String
});

// !!!!! Create a collection - this singular (Fruit) will be replaced as plural (fruits) in collection table
const Fruit = mongoose.model("Fruit", fruitSchema);

// Create a new table
const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "This is a great!"
});

// fruit.save();

// insert many (more than one table)

const kiwi = new Fruit ({
    name: "Kiwi",
    rating: 10,
    review: "This is from NZ"
});

const orange = new Fruit ({
    name: "orange",
    rating: 15,
    review: "This is from US"
});

const banana = new Fruit ({
    name: "banana",
    rating: 20,
    review: "This is from Hawaii"
});

// insertMany takes two parameters such as array(the data wants to be added) and callback function
// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully inserted!");
//     }
// });

// MongooseError: Model.insertMany() no longer accepts a callback
// Fruit.insertMany([kiwi, orange, banana]);


// Fruit.find(function(err, fruits) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(fruits);
//     }
// });

// MongooseError: Model.find() no longer accepts a callback

console.log(Fruit.find({}));


// Mongoose order - Create schema, Create a collection, Create a new table

// Create Person collection on Fruit db
// Person schema
const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    height: Number,
    weight: Number,
    occupation: String
});

// Person collection
const Person = mongoose.model("Person", personSchema );

// Person table
const person = new Person ({
    name: "Jeff Hwang",
    age: 28,
    height: 181,
    weight: 90,
    occupation: "Student"
});

// person.save();


