// 10/14/2020
//The task here:
//Creating a button that changes the background color to a random color from a selection of 16.7 million colors.


// Math.random();    //this gives random number between 0 to 0.9~



$(document).ready(function () {

    $("#bgchanger").click(function () {
        var redColor = Math.random() * 256; //range should be 0 to 255.9~
        var redColor = Math.floor(redColor);  //removes decimal point, meaning from 255.9 to 255
    
        var greenColor = Math.random() * 256; //range should be 0 to 255.9~
        var greenColor = Math.floor(greenColor); 
    
        var blueColor = Math.random() * 256; //range should be 0 to 255.9~
        var blueColor = Math.floor(blueColor); 
    
    
        var rgbValue = `rgb( ${redColor}, ${greenColor}, ${blueColor})`;  
        // ` ${}`  string literal is better. or use this.. "rgb(" + redColor + ", " + blueColor + ", " greenColor + ");
        var rgbText = `<p>${rgbValue}</p>`; 
        $("body").css("background-color", rgbValue);
        $("body").append(rgbText);
    });

});
