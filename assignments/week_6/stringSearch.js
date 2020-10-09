// ************************************** Codes from here
var string = "This is a sentence.";

var stringArray = string.split("");  //we are putting "" here, so it show T h i s a s e n t e n c e .

console.log(stringArray);

stringArray.pop();   //since we use POP,   . got removed

console.log(stringArray);

var updatedString = stringArray.join("");     //since we use JOIN, we want to join back all letters

console.log(updatedString);
// ******************all Codes end here, just for removing the .  from "This is a sentence." to "This is a sentence"




var firstMatch = -1;
for (var i = 0; i < stringArray.length; i = i + 1) {            //stringArray.length, it counts how many, here is 18 strings for "This is a sentence"

    var currentLetter = stringArray[i];

    if (currentLetter === "e") {                 //=== , strict comparing, if this is a string, means false (we are trying to look for letter e)
        console.log("We found an e!");
        
        firstMatch = i;     // This will save the index number of the match, so it can be used later, after the loop is done.



        stringArray[i] = "E"   //here we are replacing all e with E.








                            // break; This will stop the loop once we find the fist match (1st e).
        continue;           // This will ignore the following code and move on with the rest of the loops.
        // we want to pause here and move on,  once we find the first letter e, we do not want to continue, we want to stop here
    }

    console.log("No e here!");
}



=====console.log(stringArray); *****copy teacher last-code into here please