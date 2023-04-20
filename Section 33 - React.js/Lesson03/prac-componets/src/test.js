var numbers = [3, 56, 2, 48, 5];


//Map -Create a new array by doing something with each item in an array.

function double(x) {
    return x * 2;
}

const newNumbers = numbers.map(double);
console.log(newNumbers);

// arrow function
const arrowFunc1 = numbers.map(x => x * 2);



// same function above (using forEach) but Map function is more handy in React
var newNumbers2 = [];

newNumbers2.forEach(function double2(x) {
    return newNumbers2.push(x * 2);
});

console.log(newNumbers2);

// arrow function
const arrowFunc2 = newNumbers2.map(x => x * 2);



//Filter - Create a new array by keeping the items that return true.

var numbers2 = [3, 56, 2, 48, 5];

const newNumbers3 = numbers2.filter(function (num) {
    return num > 10
});

console.log(newNumbers3);



// same function above (using forEach)
var numbers3 = [];

numbers3.forEach(function (num) {
    if (num < 10) {
        numbers3.push(num);
    }
});

console.log(numbers3);

// arrow function
const arrowFunc3 = numbers2.filter(num => num < 10);


//Reduce - Accumulate a value by doing something to each item in an array.

var numbers4 = [3, 56, 2, 48, 5];
var newNumbers4 = 0;

numbers4.forEach(function (curentNum) {
    newNumbers4 += curentNum;
});

console.log(newNumbers4);


// same function above (using forEach)
var newNum = 0;

numbers4.reduce(function (newNum, curentNum) {
    return newNum + curentNum;
});

console.log(newNum);


// arrow function
const arrowFunc4 = numbers4.reduce((newNum, curentNum) => newNum + curentNum);



//Find - find the first item that matches from an array.

var numbers5 = [3, 56, 2, 48, 5];

const newNumbers5 = numbers5.find(function (num) {
    return num > 10;
})

console.log(newNumbers5);

// arrow function
const arrowFunc5 = numbers5.find(num => num > 10);
