/* 10-9-2020       started with jQuery       */
// we want to make sure that this jQuery.js at the beginning.

$(document).ready(function () {   //this is a function, $(); = jQuery() our jQuery will ONLY run if document(DOM=Document Object Model) is loaded
    console.log("jquery has loaded!");
    // Changes background dynamically to yellow.
    $("body").css("background-color", "yellow");
});    


// since the READY is being corssedout,
// THIS is the Newest/correct way to code with jquery:
$(function () {
    console.log("jquery has loaded!");
    $("body").css("background-color", "yellow");
});





//jQuery();  = $()            same



/* Examply only...:
$("a.link_class").css("background-color", "#f00")
*/