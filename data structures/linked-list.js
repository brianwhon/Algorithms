function LinkedList() {
    this.head = null;
    this.tail = null;
    for (let i=0; i<arguments.length; i++) {
        this.push(arguments[i]);
    }
}

function Node(val) {
    this.value = val;
    this.next = null;
}

// adds node to end of list
LinkedList.prototype.push = function(value) {
    if (this.head === null) { 
        this.head = new Node(value);
        this.tail = this.head;
    } else {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
    }
};

// returns true if value is present in the list
LinkedList.prototype.contains = function(value) {
    let nextNode = this.head.next; 
    if (this.head.value === value) { 
        return true;
    }
    while (nextNode !== null) {//while loop cycles as long as current node has a next. when node doesn't have a next, it's reached the tail
        if (nextNode.value === value) {
            return true;
        } else {
            nextNode = nextNode.next;
        }
    }
    return false;
}
// Bonus
// adds node to beginning of list
LinkedList.prototype.addToHead = function(value) {
    if (this.head === null) { 
        this.head = new Node(value);
        this.tail = this.head;
    } else { 
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
};

// Extra Bonus
// insert an item at the position specified
LinkedList.prototype.insert = function(value, position) {
    let currentNode = this.head;
    let ourPosition = 0; 
    if (position === 0) { 
        this.addToHead(value);
    } else { 
        while (ourPosition < position) { 
            if (ourPosition+1===position) { 
                const newNode = new Node(value); 
                newNode.next = currentNode.next;
                currentNode.next = newNode;
            }
        currentNode = currentNode.next; 
        ourPosition++; 
        }
    }
};

// Extra Bonus
// remove first occurrence of value from list
LinkedList.prototype.removeItem = function(value) {

};

// Extra Bonus
// remove element at specified position in list
LinkedList.prototype.removePosition = function(position) {

};
