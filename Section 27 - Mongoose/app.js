// npm install mongodb mongoose or mongoose@5.3.4

// npm install mongoose@5.3.4 --> // current mongoose version is 7.0.3 but we use 5.3.4

// mongodb command - show dbs, use fruitsDB, show collections, [db.fruits.find()]

const mongoose = require("mongoose");

// connect db server and create db
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true}); // create or connect if does not exist, it creates automatically

// Fruit 
// Create schema
const fruitSchema = new mongoose.Schema ({
    name : {
        type: String,
        required: [true, "Please check your data entry, no name specified"] // "name" must be specified otherwise prints error message
    },
    rating: {
        type: Number,
        min: [1, "Please check your data entry, no name specified"], // minimum number is 10 otherwise prints error message
        max: [10, "Please check your data entry, no name specified"]
    },
    review: String
});

// !!!!! Create a collection - this singular (Fruit) will be replaced as plural (fruits) in collection table
const Fruit = mongoose.model("Fruit", fruitSchema);

// Create a new table
const fruit = new Fruit ({
    name: "Apple",
    rating: 10,
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

// MongooseError: Model.insertMany() no longer accepts a callback @7.0.3
// Fruit.insertMany([kiwi, orange, banana]); @7.0.3

// Find 

// Fruit.find(function(err, fruits) {
//     if (err) {
//         console.log(err);
//     } else {
//         // close mongoose connection
//         mongoose.connection.close();

//         // console.log(fruit); // prints all fruits
//         fruits.forEach(function (fruit) {
//             console.log(fruit.name);
//         });
//     }
// });



// // Update
// // the first fruit
// Fruit.updateOne({_id: "641d0886eb77b48cb837d2a1"}, {name: "Peach"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated the document!");
//     }
// }); 


// // Delete
// Fruit.deleteOne({_id: "641d0b9003dfc9e6ea162b0f"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted the document!");
//     }
// }); 



// MongooseError: Model.find() no longer accepts a callback @7.0.3
// console.log(Fruit.find({})); @7.0.3













// Example

// Mongoose order - Create schema, Create a collection, Create a new table

// Create Person collection on Fruit db
// Person schema
const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    height: Number,
    weight: Number,
    occupation: String,
    favoriteFruit: fruitSchema //for embedded
});

// const pineapple = new Fruit({
//     name: "Pineapple",
//     rating: 5,
//     review: "I love pineapple!"
// });

// pineapple.save(); // for embedded



const strawberry = new Fruit({
    name: "strawberry",
    rating: 5,
    review: "I love strawberry!"
});

strawberry.save(); // for embedded


// Person collection
const Person = mongoose.model("Person", personSchema);

// Person table

// Jeff
// const person = new Person ({
//     name: "Jeff Hwang",
//     age: 28,
//     height: 181,
//     weight: 90,
//     occupation: "Student"
// });

// Tim
// const person = new Person ({
//     name: "Tim Kim",
//     age: 28,
//     height: 181,
//     weight: 90,
//     occupation: "Student",
//     favoriteFruit: pineapple // this will be embedded in person 
// });

// person.save();

// // Update embedded fruit
// the first fruit
Person.updateOne({_id: "641d33995b55bd61bd4f9f77"}, {favoriteFruit: strawberry}, function(err) { // name: "Jeff Hwang" can be used instead of_id: "641d33995b55bd61bd4f9f77"
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully updated the document!");
    }
}); 

// Delete Many

// Person.deleteMany({name: "Jeff Hwang"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted the document!");
//     }
// }); 
