//10/2/2020
// console.log(1 +1);  (bad, not effecient function)

function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

/*
var results = add(100, 50);
console.log(results);

console.log( add(54, 29) )
*/


function subtract(num1, num2, reverse) {   //we adding reverse....we customizing
    if (reverse == true){
        var difference = num2 - num1;
    } else {
        var difference = num1 - num2;
    }
    return difference;
}


function multiply(num1, num2) {
    var product = num1 * num2;
    return product;
}


function divide(num1, num2) {
    var quotient = num1 / num2;
    return quotient;
}


//Example: using functions to calculate the area of a circle)
function circleArea(radius) {
    // radius * radius * pi
    var radiusSquare = multiply(radius, radius);
    var pi = Math.PI;  //Math is a JavaScript class, and inside, we have PI

    var area = multiply(radiusSquare, pi);

    return area;
}

console.log(circleArea(5));



function totalSum3Times(num1, num2){
    var firstSum = add(num1, num2);
    var secondSum = add(num2 + 1, firstSum);
    var thirdSum = add(num2 + 2, secondSum);

    return thirdSum;
}
   
var results = totalSum3Times(4,5);
console.log(results);



//for the revers we added in subtract, Line 17
console.log( subtract(50, 100, false ) );   // it will show -50
console.log( subtract(50, 100, true) );     // it will show 50



