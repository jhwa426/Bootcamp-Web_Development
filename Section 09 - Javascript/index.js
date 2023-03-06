'use strict';
// added in ES 5
// use this for valina Javascript.

// var : has the function or global scope.

// let : has the block scope.
// const : has the block scope.
// - security
// - thread safety
// - reduce human mistake

// 1. print
// window.alert("Hello World!");

// 2. Variables
// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");

// var name = "Your name is " + firstName + ' ' + lastName + '.';

// window.alert(name);

// 3. Variables Exercise
// function test() {
//     var a = "3";
//     var b = "8";

//     // Exercise
//     var tempA = a;
//     var tempB = b;

//     a = tempB;
//     b = tempA;

//     // var tempVariable = a;

//     // a = b;
//     // b = tempVariable;

//     console.log("a is " + a);
//     console.log("b is " + b);
// }

// 4. String
// var message = "Hello";
// alert(message + " " + "there!");

// 5. length
// var name = "Jeff";
// var length = name.length;
// alert("Your name has " + length);

// var getData = prompt("Enter your characters!");
// var lengthData = getData.length;

// alert("Your data has " + lengthData);

// 6. Slicing and Extracting parts of a string
// var name = "Jeff Hwang";
// var firstName = name.slice(0,4);
// var lastName = name.slice(5,);

// var name = "Your name is " + firstName + ' ' + lastName + '.';

// window.alert(name);

// var name = prompt("Enter your name");
// var space = name.indexOf(" ");

// var firstName = name.slice(0,parseInt(space));
// var lastName = name.slice(space+1, );

// var name = "Your name is " + firstName + ' ' + lastName + '.';

// window.alert(name.toUpperCase());

// 7. Numbers
// var dogAge = prompt("How old your dog?");
// var humanAge = (dogAge-2) * 4 + 21;

// var str = "Your dog is " + humanAge + "years old in human years,";

// window.alert(str);


// 8. Function 
function printHello() {
    console.log('Hellooooo');
}
printHello();

// Default parameters (added in ES6)

function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}
showMessage('Hi');
showMessage('Hi', 'jeff');

let globalMessage = 'global';
function printMessage () {
    let message = 'Hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'Hello';
    }
}

// Return a value
function sum(a, b) {
    return a + b;
}

const result = sum(1, 2);
console.log(result);

function checkIfevenNumber (a) {
    if (a / 2 == 0) {
        return a;
    }
}
const even = checkIfevenNumber(2);
console.log(even); // undefined



function calcBottles(startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);

    return numberOfBottles;
}




// Early return, earlt exit
function upgradeUser(user) {
    if (user.point <= 10)  {
        return;
    }
}
console.log(upgradeUser(10)); // undefined

// First-class function
// (1). Funtion expression

const print = function print() { //anonymous function
    console.log('print');
};

print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1,3));

// (2). Callback function using function expression

function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// named function
const printYes = function() {
    console.log('Yes!');
}

const printNo = function() {
    console.log('No!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
const simplePrint1 = function () {
    console.log('simplePrint!');
}
console.log(simplePrint1);

const simplePrint2 = () => console.log('simplePrint!');
console.log(simplePrint2);

const add = (a, b) => a + b;

// same with below one.

// const add = function (a, b) {
//     return a + b;
// }

// IIFE : Immediately Invoked Function Expression.
(function hello() {
    console.log('IIFE');
}) (); 

// == hello();