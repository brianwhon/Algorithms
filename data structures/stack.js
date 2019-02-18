//Creating a new stack object 
function Stack() {
    this.contents = {};
    this.length = 0;
}

//Adding an element to the top of a stack (push)
Stack.prototype.push = function(value) {
    this.contents[this.length] = value;
    this.length++;
    return this.length;
};

//Removing an element from the top of a stack and returning the removed element(pop)
//First in, last out
Stack.prototype.pop = function() {
    const deleted = this.contents[this.length-1]
    delete this.contents[this.length-1]
    this.length--
    return deleted
};

//performing a callback on each element at the top of a stack and removing it from the stack
Stack.prototype.forEach = function(callback) {
    for (let i=this.length-1; i>=0; i--) {
      callback(this.contents[i])
      delete this.contents[i]
      this.length--
    }
};