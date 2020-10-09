// 10-5-2020:  git commit -m "JavaScript loops"

// while loop
if (true) {

}

var counter = 0;


while (counter < 10) {
    console.log("Running");
    // Run while WHILE the condition is true.
    counter = counter +1;
}


// do while loop:  do {} while ();           (do while loop is good for buttons)

while (false) {

}

do {
    // This line will ALWAYS run at least 1 time, because we execute the code first AND THEN we check the condition.
} while (false);



// for loop:    for (need 3 Statements inside here: ***********1) iteration, 2) condition, 3)increment) {}  ; for koop is good for finding a letter in paragraphs/collection of things 
for (var i = 0; i < 10; i = i + 1) {       // or we can use i++    for i = i + 1
    console.log("Running");
}


// shorthands
var someNumber = 10;

someNumber++;       //means someNumber= someNUmber + 1;
someNumber--;       //means someNumber = someNumber -2;
someNumber += 2;    //means someNumber = someNUmber +2;
someNumber -= 2;    //means someNumber = someNumber -2;
someNumber /= 3;    // someNumber = someNumber/3 ; if someNumber=1 , means 1/3
someNumber *= 3;    // someNumber = someNumber*3 ; if someNumber=1 , means 1*3





/*
 for loop Example
for (var i = 0; i < 100; i =i + 1) {
    console.log("Running");
    console.log(i);
}
*/



// BREAK and CONTINUE

for (var i = 0; i < 10; i = i + 1) {
    console.log("running with break keyword.")

    if (i == 6) {
        break;
    }
}



// Continue, conce the continue keyboard is executed, the rest of the code in the CURRENT loop, will not run and will move on to the next iteration of the loop.
for (var i =0; i < 10; i = i + 1) {

    if (true) {
        continue;
    }

    console.log("Running with continue keyboard.");
}