// 10-2-2020
//3 Datatypes:
"strings";
1000;
false;

// Variables
var someVariable = -100;
var isItRaining = false;

// If Statements
if (someVariable > 10) {
    console.log("This number is higher than 10.");

    if (someVariable < 1000) {
        console.log("This number is lower than 1000.");
    }

} else {
    console.log("This number is lower than 10.");
}

if (isItRaining == true) {
    console.log("Bring an umbrella!")
}

// Functions
function coolFunction() {
    console.log(100);
    console.log(10);
    console.log(1);
}

coolFunction();
coolFunction();
coolFunction();



// Arguments & Parameters
// Arguments get stored inside of Parameters
// Arguments are the values given to the function, and parameters are the function variables that will hold these values.

// Parameters are written inside the parenthesis of the function DEFINITION.
function addExclamation(message, num) {   // The 2 things inside (), are called Parameters. inside, we put (message) ; we can give any names in ( )
    console.log(message, "!!!", 100);     //inside, we put (message )

    var results = num * 2;
    console.log(results);
}


// Arguments are written inside the parenthesis of the function CALL.
addExclamation("Hello how are you", 2);   //the 2 things inside (), are called Arugments)
addExclamation("It is raining", 7);
addExclamation("Goodbye", 14);


// console.log(100, 1000, "hello there");


// Returning values from funtions. (only can return value, "Nice weather")

// The someText variable was created when you call the function, but it also get destroyed when the function cal ends.
function getText() {
    var someText = "Nice weather.";
    return someText;
}

console.log( getText() );

// someText does not exist as it was destroyed when the function call ended.
// console.log( getText() );













//Concatenation
var completeSentence = "My name is " + "Kenny";  // ****added a SPACE after is ; + for combining
console.log(completeSentence);



// Type Coercion
console.log("Heloo" + 100);  // Hello=string, 100=number (2 different Datatypes here) but here the JavaScript auto convert them into strings. ***it will just show like Hello100
console.log("100" + 100);                //***it will show like 100100
console.log(100 + "100");                //***it will show like 100100
console.log("This is false " + true);    //***it will show like This is false true
// ======> if 2 datatypes in it, it auto converts them into Strings. (JavaScript is treating them like Strings only, if 2 or more datatypes in it.)

// Tryign to multiple a string, we end up with a special Number called NaN. NaN=Not a Number. (shows NaN in Git Bash)
var longString = "Hello there!" * 10;
console.log(longString);