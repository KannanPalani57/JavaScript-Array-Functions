//Split method splits the string to array

var string = "Hello World,I-am code"

var singleStringArr = string.split("")  //it splits the arr with single word

var wordStringArr = string.split(" ");

//    str.split(/\W/)  -splits the array with no punctuation and numbers but not underscores.


var splitify = string.split(/\W/)


console.log(splitify);

console.log(wordStringArr);
console.log(singleStringArr);