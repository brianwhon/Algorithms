function HashTable() {
    this.SIZE = 16;
    this.storage = new Array(this.SIZE);                         
  }

HashTable.prototype.set = function(key, value) {
    const index = hashCode(key, this.SIZE)
    console.log(index)
    if (this.storage[index] === undefined) {
      this.storage[index] = {[key]: value}
    } else {
      this.storage[index][key] = value
    }
};
  const newHash = new HashTable();
  console.log(newHash);
  
  newHash.set("a", 1);
  newHash.set("a", 3);
  newHash.set("A", 14);
  newHash.set("b", 2);
  newHash.set("B", 4);
  newHash.set("c", 5);
  newHash.set("C", 6);
  
  console.log(newHash);

  HashTable.prototype.get = function(key) {
    const index = hashCode(key, this.SIZE)  
    return this.storage[index][key];
  };
  
  console.log(newHash.get("a"))
  console.log(newHash.get("B"))
  console.log(newHash.get("A"))


  HashTable.prototype.remove = function(key) {
    const index = hashCode(key, this.SIZE);  
    const removedVal = this.storage[index][key];
    delete this.storage[index][key];
    return removedVal;
  };
  console.log(newHash);
  console.log(newHash.remove("c"));
  console.log(newHash)
  

function hashCode(string, size) {
    'use strict';
    let hash = 0;
    if (string.length === 0) return hash;
    for (let i = 0; i < string.length; i++) {
      const letter = string.charCodeAt(i);
      hash = ((hash << 5) - hash) + letter;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash) % size;
}