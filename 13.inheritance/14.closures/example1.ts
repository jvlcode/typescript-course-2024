// without closure

let counterValue = 0;

function incrementCounter() {
    counterValue++;
}

function getCounterValue() {
    return counterValue;
}

incrementCounter();
console.log(getCounterValue()) //1

incrementCounter();
console.log(getCounterValue()) //2