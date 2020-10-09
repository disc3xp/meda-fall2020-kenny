// 10/7/2020: Worked on storing function in Variables, Arrays, and Objects
// Array is good for holding data that access ; ( good for Months, weekdays )
// Object is good for grouping up information ; good for holding data relate to each other

//Objects do not have index, but having keys (key values)
var myObject = {
    id: "93j219d",
    firstName: "Rob",  // Object with 5 values here ; orders do not matter, just use key values. so its kinda better than Array
    lastName: "Smith",
    address: "123 Main St.", // or when address ==> use array here ==>   ["123 Main Street.St", 345 California StaticRange.]
    age: 45,
    title: "Engineer",
};

var myArray = ["ROb", "Smith", "123 Main St.", 45, "Engineer"];


myArray.length;       //  .length is a property  ==> 5
myArray[0];
console.log(myObject.address);    //1st way) dot notation
myObject["address"];             //2nd way) square braket notation. This is how to access key with space in it , for example if "first Name" in the Object


var myEmployees = [];  //This is the Array

myEmployees.push(myObject);

mySecondEmployee = {
    firstName: "Dan",
    lastName: "Lincoln",
    address: "124 Main St.",
    age: 32,
    title: "CEO"
};

myThirdEmployee = {
    firstName: "Mary",
    lastName: "Doe",
    address: "345 USA St.",
    age: 40,
    title: "Scientist"
}

// push 2 more employees into the employee array 
myEmployees.push(mySecondEmployee);  //PUSH here, it's adding mySecondEmployees to the Array-myEmployees
myEmployees.push(myThirdEmployee);   //PUSH here, it's adding mySecondEmployees to the Array-myEmployees
/* (or we can combine them as, myEmployees.push(mySecondEmployee, myThirdEmployee);) */
console.log(myEmployees);

//trying to calculate all my employees' average age
// Loops through each element in pit employee array
var totalAges = 0;
for (var i = 0; i < myEmployees.length; i = i +1) {
    // ... And get the age of the current employee, add it to totalAges.
    totalAges = totalAges + myEmployees[i].age;   // myEmployees[i].age ==> accessing Array first, and then Object's key value; exmample here is [0] index's age, [1] index's age,
}

// Divide the toal ages by the amount of employee we had to get the average ago.
var averageAge = totalAges / myEmployees.length;  //myEmployees.length ==> # of employees in my data 

console.log(averageAge);



// Functions inside of Objects, Arrays, and Variables.
var something = 100;
// Definition of a function.
function someFunction() {
    console.log("I am a function");
}
// We are NOT calling someFunction, instead we are passing the definition of someFunction into storedFunction
var storedFunction = someFunction;  //notice there is no () here
// Because storedFunction is holding an actual function (from line 69) we can actually run this function by putting parenthesis after the variable call.
// We did not get rid of the someFunction xxxxxxxxxxxxxxxxxxxxxx
storedFunction();  // please run this function inside of storedFunction, need ()




// *** 1) putting function in Variable
//another exmaple for runing the function that the variable is having a function already.
var runForEachEmployee = function (employee) {
    console.log("Hello!" + employee.firstName);
};

myEmployees.forEach(runForEachEmployee);  //we pass the above function to forEach





// *** 2) putting function in Object
// Runs the function stored in the key "doSomeWork" inside of specialObject object.
var speicialObject = {
    doSomeWork: function () {
        console.log("Working!");
    }
};

speicialObject.doSomeWork();
console.log();


// An object's Property holds data (that belongs to that object). Properties are just variables that are held by an object.
// An Object's Method holds a function (that belongs to that object). Methods are just functions that are held by an object.


// *** 3) putting function in Array, (usually NOT using this in real life)
var myArray2 = [
    100,
    200,
    function () {
        console.log("hello");
    },
    400
];

myArray2[2]();  //function here, just saying "hello"