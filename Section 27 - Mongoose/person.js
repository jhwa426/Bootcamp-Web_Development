// npm install mongodb mongoose or mongoose@5.3.4

// npm install mongoose@5.3.4 --> // current mongoose version is 7.0.3 but we use 5.3.4

// mongodb command - show dbs, use fruitsDB, show collections, [db.fruits.find()]

// get started mongoose
const mongoose = require("mongoose");

// connect db server and create db
mongoose.connect("mongodb://localhost:27017/peopleDB",{useNewUrlParser: true}); // create or connect if does not exist, it creates automatically

// Mongoose order - Create schema, Create a collection, Create a new table


// Create Person collection on people db

// Person schema
const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    height: Number,
    weight: Number,
    occupation: String,

});


// Insert Person collection to personSchema
// !!!!! Create a collection - this singular (person) will be replaced as plural (persons) == (people) in collection table
// Therefore, the table name must be specified and carefully created! ("person" cannot be "persons" which was weird, must be careful! )
const Person = mongoose.model("Person", personSchema);

// Person table

// Jeff
const person = new Person ({
    name: "Jeff Hwang",
    age: 28,
    height: 181,
    weight: 90,
    occupation: "Student"
});

// person.save();


// --------------------- set up ------------------------




// Find 

// Person.find(function(err, p) {
//     if (err) {
//         console.log(err);
//     } else {
//         // close mongoose connection
//         mongoose.connection.close();

//         // console.log(p); // prints all fruits
//         Person.forEach(function (p) {
//             console.log(p.name);
//         });
//     }
// });



// UpdateOne
// Person.updateOne({_id: "641d33995b55bd61bd4f9f77"}, {weight: 91}, function(err) { // name: "Jeff Hwang" can be used instead of_id: "641d33995b55bd61bd4f9f77"
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated the document!");
//     }
// }); 



// insert many (more than one table)

// create object that wants to add
// Tim
const personA = new Person ({
    name: "Tim Kim",
    age: 28,
    height: 181,
    weight: 90,
    occupation: "Student",
});

// Kim
const personB = new Person ({
    name: "Kim",
    age: 28,
    height: 181,
    weight: 90,
    occupation: "Student",
});

// insertMany takes two parameters such as array(the data wants to be added) and callback function

// Person.insertMany([personA, personB], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully inserted!");
//     }
// });



// Delete one

// Person.deleteOne({_id: "641d0b9003dfc9e6ea162b0f"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted the document!");
//     }
// }); 



// Delete Many

// Person.deleteMany({name: "Jeff Hwang"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted the document!");
//     }
// }); 
