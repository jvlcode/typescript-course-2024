class User {
    name: string;
    age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    static isAdult(age:number) {
        return age >= 18;
    }
}

// const user = new User("Alice", 30);
// console.log(user.isAdult())

console.log(User.isAdult(30), '30')
console.log(User.isAdult(15), '15')