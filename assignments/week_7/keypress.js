// 10/15/2020:
$(document).ready(function () {

    // activates function whenever a key is pressed on the keyboard.

    // detects if the key 97 (lowercase a) is licked then run the following codeblock.
    $("#textbox").keypress(function (event) {
        console.log("Type")
        if (event.which === 97) {                //97 is letter a, 
            event.preventDefault();             // .preventDefault() does not allow the normal action of the event, in this case, write a letter a in the textbox.
            //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL.
            $("#textbox").val("apple");        //when type in "a", it auto show "apple" in the textbox
        }
    });


    
    $(document).keypress(function (event) {
        var keyPressed = event.which;
        console.log(keyPressed);
        console.log(event);
      // $("body").append(`<p>The ${keyPressed} keyboard was pressed!</p>`);

      if (event.which === 114) {   // r
        $("body").append("<div style='width: 100px; height: 100px; background-color: red; display: inline-block'></div>");
    }

       if (event.which === 103) {  // g
           $("body").append("<div style='width: 100px; height: 100px; background-color: green; display: inline-block'></div>");
       }


       if (event.which === 98) {  // b
        $("body").append("<div style='width: 100px; height: 100px; background-color: blue; display: inline-block'></div>");
    }
    });






});

