$(document).ready(function () {
    //console.log("hello");   ==>for testing purpose only


    setTimeout(function () {
        var myBox = $("#box"); //jQuery();   if we have to use the Element many many times, just make it a Variable is better
        myBox.css("background-color", "red");  // all JavaScript codes here! not CSS.      (property, value)
    }, 3000);   // ==>we wan to wait 3 secconds, and then change the box from Blue to Red
    

   
    setTimeout(function () {
        var myBox = $("#box");
        myBox.css("background-color", "green");
    }, 6000);  // ==>we wan to wait 6 secconds, and then change the box from Red to Green.



    var orangeButton= $("#orange-button");
    orangeButton.click(function () {       //using the CLICK method, when click, change the box to Orange
        $("#box").css("background-color", "orange");
        //  $("body").empty();      //eextra. gets rids of children of select DOM object, if click, the whole content will be disappeared.
    });


    var purpleButton = $("#purple-button");
    purpleButton.click(function() {
        $("#box").css("background-color", "purple");
        $("#purple-button").css("background-color", "purple");   //extra, customizing the button, highlight with purple.
        $("#purple-button").css("color", "white");  //extra, bustomizing the button's text to white

    });


    $("#pink-button").click(function () {     // THIS TIME, not going to store the variable.
        // console.log("clicked");            //to check if my jQuery working or not.
        $("#box").css("background-color", "pink");
    }); 

    $("body").click(function () {               //extra, give the Body background color to yellow; but we need to click the webpage Body once. so it shows yellow. 
        $("body").css("background-color", "yellow");
    });




});


