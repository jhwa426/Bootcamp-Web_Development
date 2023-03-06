// Quiz

// function calculate(command, a, b)
// commend: add. substract, multiply, modular (remainder)

function calculate (command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'modular':
            return a % b;
        case 'divide':
            return a / b;
        default:
            throw Error('unknown command');
    }
}

console.log(calculate('add', 2, 5));


// get the age
function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        
        var yearsRemaining = 90 - age;
        var days = yearsRemaining * 365;
        var weeks = yearsRemaining * 52;
        var months = yearsRemaining * 12;
        
        console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`);
        
    
    /*************Don't change the code below**********/
    }

    
    // BMI calculation
    function bmiCalculator(weight, height){

        var result = weight/(Math.pow(height,2));

        return Math.round(result);
        // return result.toFixed(2); //round to at most 2 decimal places, if necessary
    }