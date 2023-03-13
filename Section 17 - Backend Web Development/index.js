'use strict';
// added in ES 5
// use this for valina Javascript.

// var : has the function or global scope.

// let : has the block scope.

// const : has the block scope.
// - security
// - thread safety
// - reduce human mistake



// const fs = require("fs");

// fs.copyFileSync("file1.txt", "file2.txt");


// npm 
// 1. superheroes

const superheroes = require('superheroes');
 
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
superheroes.random();
//=> 'Spider-Ham'

const mySuperheroes = superheroes.random();

console.log(mySuperheroes);


// var superheroes = require('superheroes');

// var mySuperheroes = superheroes.random();

console.log(mySuperheroes);



// 2. supervillains 

const supervillains = require('supervillains');

supervillains.all;
//=> ['Abattoir', 'Able Crown', …]

supervillains.random();
//=> 'Mud Pack'

var mySupervillains = supervillains.random();
// var mySupervillainsAll =supervillains.all;


console.log(mySupervillains);
// console.log(mySupervillainsAll);

console.log(mySuperheroes);