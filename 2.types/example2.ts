var myString:string = "test";
var myNumber:number = 1;
var myBoolean:boolean = true;

myString = myNumber;
myBoolean = myString;
myNumber = myBoolean;

console.log(myString, myBoolean, myNumber);
