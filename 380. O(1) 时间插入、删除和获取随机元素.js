var RandomizedSet = function () {
  this.hashmap = {};
  this.array = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.hashmap[val] === undefined) {
    this.array.push(val);
    this.hashmap[val] = this.array.length - 1;
    return true;
  }
  return false;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.hashmap[val] !== undefined) {
    let index = this.hashmap[val];
    this.array[index] = this.array[this.array.length - 1];
    this.hashmap[this.array[index]] = index;
    this.array.pop();
    delete this.hashmap[val];
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.array[Math.floor(Math.random() * this.array.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
