"use strict";
var myString = "test";
var myNumber = 1;
var myBoolean = true;
myString = myNumber;
myBoolean = myString;
myNumber = myBoolean;
console.log(myString, myBoolean, myNumber);
