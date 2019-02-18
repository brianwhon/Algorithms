//Contructor function for a new queue object
function Queue() {
    this.storage = {};
    this.index = 0;
}

//adding an element to a queue
Queue.prototype.enqueue = function(value) {
    let keys = Object.keys(this.storage);
    let indexOfQ = keys.length;
    this.storage[indexOfQ] = value;
    this.index++;
};

//removing the earliest added element from a queue (first in, first out)
Queue.prototype.dequeue = function() {
    let keys = Object.keys(this.storage);
    let keysSorted = keys.sort();
    let indexRem = keysSorted[0];
    let first = this.storage[indexRem];
    delete this.storage[indexRem];
    indexRem++;
    this.index-=1
    return first;
};