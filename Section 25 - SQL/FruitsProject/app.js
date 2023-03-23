// import { MongoClient } from "mongodb";

// const MongoClient = require("mongodb");

// const assert = require("assert");

// const url = "mongodb://localhost:27017";

// const dbName = "fruitsDB";

// const client = new MongoClient(url);

// client.connect(function(err) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");

//     const db = client.db(dbName);

//     client.close();

// });


const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);


// // findALL DB
// async function run() {
//     try {
//         const database = client.db('fruitsDB');
//         const fruits = database.collection('fruits');

//         const query = {  name : "Kiwi"};
//         const fruit = await fruits.findOne(query);

//         console.log(fruit);
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);


// findAll

async function run() {
    try {
        const database = client.db('fruitsDB');
        const fruits = database.collection('fruits');

        // Query for a movie that has the title 'Back to the Future'
        const query = {  score : {$gt: 1} };
        const options = { projection : { 
            "name" : 1,
            "score" : 1,
            "review" : 1
        }};
        
        const fruit = await fruits.find(query, options);

        await fruit.forEach(console.dir);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

// insertOne

// async function run() {
//     try {
//         const database = client.db("fruitsDB");
//         const fruits = database.collection("fruits");

//         // create an array of documents to insert
//         const docs = [
//             { 
//                 name: "Apple", 
//                 score: 8, 
//                 review: "Great fruit"
//             },
//             {
//                 name: "Orange", 
//                 score: 6, 
//                 review: "Kinda sour"
//             },
//             {
//                 name: "Banana", 
//                 score: 9, 
//                 review: "Great stuff!!"
//             }
//         ];

//         // this option prevents additional documents from being inserted if one fails
//         const options = { ordered: true };

//         const result = await fruits.insertMany(docs, options);
//         console.log(`${result.insertedCount} documents were inserted`);
//     } finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);


// // findALL DB
// async function run() {
//     try {
//         const database = client.db('fruitsDB');
//         const fruits = database.collection('fruits');

//         const query = {  name : "Kiwi"};
//         const fruit = await fruits.findOne(query);

//         console.log(fruit);
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);


// findOne

// async function run() {
//     try {
//         const database = client.db('fruitsDB');
//         const fruits = database.collection('fruits');

//         // Query for a movie that has the title 'Back to the Future'
//         const query = {  score : {$gt: 1} };
//         const options = { projection : { "name" : 1}};
//         const fruit = await fruits.findOne(query, options);

//         console.log(fruit);
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);