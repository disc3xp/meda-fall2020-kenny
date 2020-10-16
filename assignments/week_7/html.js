// 10/14/2020

$(document).ready(function () {
// console.log("ready!");    // for me to test, to see if jQuery ready
    setTimeout(function () {

        $("body").append("<div id='content'></div>");
        // .append ADDS to existing children, and is placed at the end of the children's list.
       
        $("div#content").html("<p>Hello there!</p>");             
        // .html REMOVES existing children elements of selected element, and then adds in what we typed in the argument.  

        $("body").prepend("<h1>This page was dynamically generated!</h1>");
        // .prepend, is the same as .append, except it ADDS to the BEGINNING of children's list.

    }, 3000);                                             //this sentence pops up after 5 seconds!!!



// ""   string can only use in a single SVGPathSegLinetoAbs.
// `    string literals can be used in multiple line
//${} only use in string literals, and this is Not jQuery, it is JavaScript    

var myFavFood = "Pizza";

var newHTMLCode = 
`<ul>
    <li>${myFavFood}</li>
    <li>Burrito</li>
    <li>Hamburger</li>
</ul>`;

$("body").append(newHTMLCode);

$("button#create-box").click(function() {
    $("h1").hide();
    // .hide() -> visually hides element, code still exists.
    // .empty() -> removes children code.
    // .remove() -> removes selected element.
    $("body").append(`<div style='width: 100px; height: 100px; border: 1px black solid;'></div>`);

});

});