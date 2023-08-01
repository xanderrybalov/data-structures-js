function Queue() {
    let collection = [];

    this.print = function () {
        console.log(collection);
    };

    this.enqueue = function (element) {
        collection.push(element);
    };

    this.dequeue = function () {
        return collection.shift();
    };

    this.front = function () {
        return collection[0];
    };

    this.isEmpty = function () {
        return collection.length === 0;
    };

    this.size = function () {
        return collection.length;
    };
}

const myQueue = new Queue();

myQueue.enqueue('Xander');
myQueue.enqueue('Xander2');
myQueue.enqueue('Xander3');

myQueue.print();

const firstElement = myQueue.dequeue();
console.log(firstElement);

myQueue.print();

const frontElement = myQueue.front();
console.log(frontElement);

const emptyStatus = myQueue.isEmpty();
console.log(emptyStatus);

const queueSize = myQueue.size();
console.log(queueSize);
