/* 10-9-2020       started with jQuery       */
// we want to make sure that this jQuery.js at the beginning.

$(document).ready(function () {   //this is a function, $(); = jQuery() our jQuery will ONLY run if document(DOM=Document Object Model) is loaded
    console.log("jquery has loaded!");
    // Changes background dynamically to yellow.
    $("body").css("background-color", "yellow");
});    