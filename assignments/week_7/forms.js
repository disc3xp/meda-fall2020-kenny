$(document).ready(function () {
    //console.log("working");

    $("#plus").click(function () {

    var firstNumberString = $("#num1").val();
    var secondNumberString = $("#num2").val();
    
    var firstNumberConverted = parseInt (firstNumberString);// parseInt, meaning convert this to a number
    var secondNumberConverted = parseInt (secondNumberString);

    /* This is how paseInt convert into:
        "hello" ==> NaN
        "100Hello" ==> 100
        "100" ==> 100
        "Hello100" ==> NaN
        "SPACE 12345" ==> 12345
        "90k3i8dk04" ==> 90
        true ==> NaN  or  in some other languages ==> 1
        
    */


   // isNaN() checks if the argument is an NaN, if it is, returns true, if it is not, returns false.
    if (isNaN(firstNumberConverted) || isNaN(secondNumberConverted) ) {  // ||, logical operator， is one side is true, and then both sides count as true.
    //The logical OR (||) operator (logical disjunction) for a set of operands is true if and only if one or more of its operands is true. It is typically used with Boolean (logical) values. When it is, it returns a Boolean value. However, the || operator actually returns the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value.
        $("#results").html("Error: one of your numbers is not a number!");
        $("#results").css("color", "red");
    } else {
    
        var sum = firstNumberConverted + secondNumberConverted;
        $("#results").html(sum);
        $("#results").css("color", "black");
    }
    });



});