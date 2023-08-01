function Stack() {
    this.count = 0;
    this.storage = {};

    //The stack has possible methods:

    //push: add a new element
    //pop: remove top element, return it
    //peek: reverse top element
    //size: restore the number of elements on the stack

    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    };

    this.pop = function () {
        if (this.count === 0) return undefined;
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };

    this.peek = function () {
        return this.storage[this.count - 1];
    };

    this.size = function () {
        return this.count;
    };
}

const myStack = new Stack();

myStack.push('Xander');
console.log(myStack.size()); // 1

myStack.push('Xander2');
console.log(myStack.size()); // 2

console.log(myStack.peek()); // Xander2

console.log(myStack.pop()); // Xander2

console.log(myStack.peek()); // Xander
