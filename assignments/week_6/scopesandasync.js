// 10/8/2020: "sync and Async code, scopes and closures"
var timer = setInterval(function() {  // Asynchronous here too
    console.log("1 second has passed");
}, 1000);


// synchronous
console.log(1);
console.log(2);
console.log(3);

// Asynchronous  ==> codes maybe run in different orderscan run in a different time
setTimeout(function () {
    console.log(5);

    clearInterval(timer);
}, 5000 );   //5000 ==> 3000ms ==> 5 seconds ==> showing 1,2,3, wait 5 sconds, and then show 5

/*
 var runsForever = setInterval(function () {
    console.log("3 seconds have passed.");
}, 3000);
*/
// clearInterval(runsForever); this will stop the interval

console.log(6);

// the result will show 1,2,3,6, 1 second has passed 1 second has paased, 1 second, 1 second and then 6



// Closures
var myGlobalVariable = 100;

function someFunction() {
    var myLocalVariable = 10;

    console.log(myLocalVariable);

    console.log(myGlobalVariable);
}


someFunction();

console.log(myGlobalVariable);
/*
// console.log(myLocalVariable);             //Cannot access myLocalVariable because it is in a child scope
*/



// If statments do NOT have scopes
if (true) {
    // Code to run
}

if (false) {
    // Code to run
}


//Example
if (true) {
    var createdVariable =300;
}

console.log(createdVariable);