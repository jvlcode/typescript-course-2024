"use strict";
var concatStrings = function (a, b, c = "cat") {
    return a + b + c;
};
console.log(concatStrings("a", "b", "c"));
console.log(concatStrings("a", "b"));
