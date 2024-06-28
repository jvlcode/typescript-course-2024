"use strict";
// with class modifiers
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        if (age > 0) {
            this.age = age;
        }
    }
}
const user = new User("Alice", 30);
console.log(user.getName());
console.log(user.getAge());
user.setName('Bob');
user.setAge(-10);
console.log(user.getName());
console.log(user.getAge());
