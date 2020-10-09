// 10/6/2020: arrays

var myVar = 100;

myVar = 200;
myVar = 100;
// array, 1 of Datatypes, means group up relatd data         = [xx, xx, xx, xx, xx];

var weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

var months = [
    "january",
    "febuary",
    "march",
    "april",
    "may",
    "june",
    "july"

];




// we have to use index to call ONE of the inside of the array
// computer start counting from 0  or  index start with 0 ; (0=monday, 1=tuesday and etc.)
console.log(weekdays[0]);

//JavaScript allow us to put differe datatype together!
var mixedArray = [100, "hello there", true];

console.log(mixedArray[1]);   // 1="hello there"

console.log(mixedArray)
;


// modifying/updating the vaule of mixedArray
mixedArray[1] = "Hello there!"
console.log(mixedArray);


// ***to add/modify 1 more variable into mixedArray,, and then assign a vaule 1005
mixedArray[3] = 1005;
console.log(mixedArray);

// ***to delete a value inisde the mixedArray    = null >> none, no longer here
mixedArray[1] = null;
console.log(mixedArray);

var emptyArray = [];
// Array methods


// Array Push    (push is a function inisde of all the Array) (Push does need arugment"xxx")
emptyArray.push("this is the first item!");

console.log(emptyArray);

emptyArray.push(10000);
emptyArray.push(false);

console.log(emptyArray);



// Array Pop (ONLY removing the last item in the Array) (Pop is the opposite of push) (Pop does not need arugment)

emptyArray.pop();
console.log(emptyArray);

emptyArray.pop();
emptyArray.pop();
console.log(emptyArray);  // so far here, we removed all index, emptyArray should be empty now since we removed 3 times)


// Array Unshift, adds a new value to the beginning of the array. (adding an index before the 0 index !!)

weekdays.unshift("superday");  //adding superday before monday! 


// Array Shift, removes the first value of the array.

weekdays.shift(); //removing the first index
console.log(weekdays);


// Array forEach, (store, and thenrun the anonymious function for every item in the array, this function will run 7 times here)
//foEach is Not a loop !! but like a loop.
/*
listOfItemsArray.forEach(function (eachItem) {
    use each Item how ever you want.
});

*/


weekdays.forEach( function (weekday) {
    console.log(weekday);
} );


// Loops and Arrays ( like looking and providing together)

var setOfNumbers = [1, 10, 100, 1000, 10000];


//dumb way to *6 for each index, we dont want these code.
// console.log(setOfNumbers[0]*6);
// console.log(setOfNumbers[1]*6);
// console.log(setOfNumbers[2]*6);
// console.log(setOfNumbers[3]*6);
// console.log(setOfNumbers[4]*6);

// .length is important (using # of index I have set/identified)
for (var i = 0; i < setOfNumbers.length; i = i + 1) {    // setOfNumbers.length ==> just check/run the # of index I have, here is 5 items [1, 10, 100, 1000, 10000]
    var product = setOfNumbers[i] * 6;
    console.log(product);
}


// Array within Array
// AKA (multidimensional array)

var masterArray = [
    [10, 2],
    [14, 20],
    [50, 12]
];

masterArray; // the entire array
masterArray[1].length;   // [1] here refer to the set [14,,20]
masterArray[2][0]; // This will grab the number 50 from the thrid array inside of this array.