// 9-30-2020:
// Takes the text within the quotes and sends it to the Javescript Console.
console.log("Hello world!");

console.log("How are you doing?");

console.log("My name is Kenny.");

// This is a single line comment

/*
multi-line
comment 
*/

// JavaScript DATATYPES:
// 1) String  (means normal text, a collection of characters, **use double quote)
"This is a really long sentence. !$#^%$#^%$#&^%";
"To use single quotes ' and ' in the string, use double quotes on the outside.";
'To use double quotes " and " in the string, use single quotes on the outside.';
"100";

// 2) Number (******Dont need quotation marks around the numbers, for javascript)
100;
10.9;
.70009;

// 3) Boolean (means a switch)
true;
false;


/* 
The computer will break on the "second" string
For example, this is wrong, will break the code, and will give error: 
" Hellow this is a double quote" "Its used for text"; Incorrect
' Hellow this is a double quote" "Its used for text'; Correct
*/

// 'There's a nice day!' Incorrect
// "There's a nice day!" Correct


console.log(1000);
console.log(true);
console.log("Hi there");



/*
Just for exmaple, how fast the computer can count; counting from 1 to 100000

for (var i = 0; i < 100000; i++) {
    console.log("Hello");
}
*/



//10-1-2020:
// Variable
var myBOX;

//Naming Schemes / Naming rules:
//Camel Case: capitalize every word AFTER the first word.
//Example: originalLocation

// Snake Case: every space is replaced by an underscore, no capital letters.
// Example: original_location

myBox = "kitchen utensils";
/* or you create your variable like this together:
var SecondVariable = "kitchen utensils";
*/

var SecondVariable = "bathroom supplies";

console.log(myBox);

// Mathematical Operators:
// + - / * %

var sum = 2 + 4;
var difference = 2 - 4;
var quotient = 2 / 4;
var product = 2 * 4;
var remainder = 2 % 4;


console.log("The Quotient of 2 and 4 is", quotient);
console.log(remainder);

// Logical Operator: (for comparing)
// == > < != <= >=

var isItRaining = true;

isItRaining == true; //true


var someNumber = 100;

someNumber == 50;  //false
someNumber > 50; //true
someNumber < 50; //false
someNumber >= 50; //true
someNumber <= 50; //false
someNumber != 50; //true

true == true; //true
true == false; //false
false == false; //true

sum > product; //false （in this JavaScript codes sum=6, product=8 here）



//If Statement (is to run code based on existing data)
//If        this is ture         then run this
//if             ()                    {}

if (false) {
    console.log("Nice Day!");
    console.log("Hello there!");
}


var personAge = 26;

if (personAge >= 21) {
    console.log("Congratz you can drink!")
} else {
    console.log("Sorry, you are too young to drink!")
}


console.log("We march on!");




//Function (only runs , if you call it)
// keyword           name of function       code block
// function            myFunction()             {}

function myFirstFunction() {
    console.log("Have a nice day!");
    console.log("Today will be sunny.");
    console.log("Today will be dry.");
}

var raining = true;
    if (raining) {
        console.log("Bring an umbrella");
    }

myFirstFunction();  //to call the function, ****alos need to include ();
myFirstFunction();
myFirstFunction();


//you should practice creating the following:
/*
Variables
Datatypes
If Statements
Logical Comparision
Functions
*/
//10/1/2020
// git commit -m "Worked on Variables, Comparisions, Mathematical Operators, and Functions