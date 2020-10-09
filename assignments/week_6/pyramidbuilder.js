//106/2020:  worked with Array and started PyramidBuilder
/*


*
**
***
****
*****
****
***
**
*


*/

//console.log("*");
//console.log("**");
//console.log("***");


//xxxxxxxxxxxx here, we making these 3 variables, its easier for us to control later
var column = "";
var pyramidHeight = 7;
var pyramidCharacter = "}";


// "Remembers" what we previously had, starts with no asterisks.
var column = "";  //  ""we put empty string here
for (var i = 0; i < 10; i = i + 1) {
    column = column + "*";  // We add one asterisk.
    console.log(column);    // We console.log what the column is currently
}
// ^ we build the 1st half of the pyramid, and to be continue

/////////// the Codes so far here, we built only upper half of the Pyramid.



//*******************************************************************
// ******************************************************************
// 10/8/2020 working on the button half of the Pyramid


/*
//console.log("final column state:", column);

//var columnArray = column.split("");
//console.log(columnArray);  //just for showing the result so far.

//columnArray.pop();
//console.log(columnArray);  //just for showing the result so far.

//var updatedColumn = columnArray.join("");
//console.log(updatedColumn);  // ****here we only having 9 stars now. (originally we had 10 stars for the Pyramid)

*/








//bellow, we are going to deduct 1 star in each row of the Pyramid
for (var i =0; i < pyramidHeight; i = i +1) {
    var columnArray = column.split("");
    columnArray.pop();
    column = columnArray.join("");
    console.log(column);
}



========need to 
compare and copy from teacher's code. about where to replace with "columnHeight" 

