function PriorityQueue() {
    let collection = [];

    this.isEmpty = function () {
        return collection.length === 0;
    };

    this.dequeue = function () {
        return collection.shift();
    };

    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            let added = false;
            for (let i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element);
            }
        }
    };
}

const myPriorityQueue = new PriorityQueue();

myPriorityQueue.enqueue('Task 1', 3);
myPriorityQueue.enqueue('Task 2', 1);
myPriorityQueue.enqueue('Task 3', 2);

console.log(myPriorityQueue.dequeue());
console.log(myPriorityQueue.dequeue());
console.log(myPriorityQueue.dequeue());
