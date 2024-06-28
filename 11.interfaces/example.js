"use strict";
function greetUser(user) {
    return `Hello ${user.firstName} ${user.lastName}`;
}
function logUserDetails(user) {
    console.log(`User: ${user.firstName} ${user.middleName} ${user.lastName}, Age: ${user.age}`);
}
let user1 = { firstName: "John", lastName: "Doe", middleName: "Francis", age: 25 };
let user2 = { firstName: "JV", lastName: "Logesh" };
console.log(greetUser(user2));
logUserDetails(user1);
