// with class
class User {
    firstName: string;
    lastName: string;
    age: number

    constructor(firstName:string, lastName:string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet(){
        return `Hello, ${this.firstName} ${this.lastName}`
    }

    getAge() {
        return this.age;
    }
}

// creating instance
let user1 = new User("John", "Doe", 25);
let user2 = new User("Jane", "Smith", 30);

console.log(user1.greet())
console.log(user1.getAge())
console.log(user2.greet())
console.log(user2.getAge())