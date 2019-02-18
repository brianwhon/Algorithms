//Creating a new binary search tree (Bst) node
function BinarySearchTree (value) {
    this.value = value; 
    this.left = null;
    this.right == null;
}

//Adding a new node to a Bst
BinarySearchTree.prototype.add = function(value) {
    if (value<this.value && this.left===null) {
      return this.left = new BinarySearchTree(value);
    }
    if (value>this.value && this.right===null) {
      return this.right = new BinarySearchTree(value);
    }
    if (value<this.value) {
      return this.left.add(value)
    }
    if (value>this.value) {
      return this.right.add(value)
    }
}

  //Checking if a value exists (return true) in a Bst, otherwise return false. 
  BinarySearchTree.prototype.contains = function(value) {
    if (this.value === value) return true;
    if (this.value !== value && this.left === null && this.right === null) return false;
    if (value < this.value) {
      return this.left.contains(value)
    }
    if(value>this.value) {
      return this.right.contains(value)
    }
  }

  //Find the minimum value of a Bst 
  BinarySearchTree.prototype.min = function() {
    if (this.left === null) return this.value; 
    return this.left.min()
  }

  //Find the maximum value of a Bst 
  BinarySearchTree.prototype.max = function () {
    if (this.right === null) return this.value;
    return this.right.max();
  }

