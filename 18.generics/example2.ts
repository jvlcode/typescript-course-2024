class Stack<T> {
    private items:T[] = [];

    push(item: T) {
        this.items.push(item)
    }

    pop() {
       return this.items.pop()
    }
} 

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop())

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");
console.log(stringStack.pop())