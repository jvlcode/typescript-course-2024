"use strict";
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
}
const numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());
const stringStack = new Stack();
stringStack.push("hello");
stringStack.push("world");
console.log(stringStack.pop());
