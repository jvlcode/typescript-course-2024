"use strict";
const jsonData = '{ "name" : "Alice", "age": 30}';
const user = JSON.parse(jsonData);
console.log(`Name ${user.name}, Age: ${user.age}`);
