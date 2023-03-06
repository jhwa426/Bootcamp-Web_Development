// Quiz

// BMI calculation

function bmiCalculator (weight, height) {
    var bmi = weight/(Math.pow(height,2));
    var interpretation = "";
    
    if (bmi < 18.5){
        interpretation = `Your BMI is ${bmi}, so you are underweight.`

    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = `Your BMI is ${bmi}, so you have a normal weight.`
        
    } else if (bmi > 24.9) {
        interpretation = `Your BMI is ${bmi}, so you are overweight.`
    }
    
    
    return interpretation;
}


// Leap Year Challenge
function isLeap(year) {
    if (year % 4 === 0){
        if (year % 100 === 0){
            if (year % 400 === 0){
                return "Leap year"
            }
            else {
                return "Not leap year."
            }
        } else {
            return "Leap year."
        }
    } else {
        return "Not leap year."
    }
}

// fizzBuzz
var output = [];
var count = 1;

function fizzBuzz() {
    if(count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if(count % 3 === 0){
        output.push("Fizz");
    } else if (count % 5 === 0){
        output.push("Buzz");
    } else {
        output.push(count);
    }
    count++;
}

fizzBuzz();


// Who's Buying Lunch? Code Challenge

function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return `${randomPerson} is going to buy lunch today!`
 
    }

// Fibonacci Challenge

function fibonacciGenerator (n) {
    var output = [];

    if (n === 1){
        output = [0];
    }
    else if (n === 2) {
        output = [0, 1];
    } 
    else {
        output = [0, 1];

        for(var i = 2; i < n; i++){
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
            

    }
    return output
    }
    