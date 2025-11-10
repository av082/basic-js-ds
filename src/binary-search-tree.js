const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  root() {
    return this.data === null ? null : this;
  }

  add(data) {
    if (this.data === null) {
      this.data = data;
      return;
    }

    if (data < this.data) {
      if (!this.left) this.left = new BinarySearchTree(data);
      else this.left.add(data);
    } else if (data > this.data) {
      if (!this.right) this.right = new BinarySearchTree(data);
      else this.right.add(data);
    }
  }

  find(data) {
    if (this.data === null) return null;
    if (data === this.data) return this;
    if (data < this.data) return this.left ? this.left.find(data) : null;
    return this.right ? this.right.find(data) : null;
  }

  has(data) {
    return !!this.find(data);
  }

  min() {
    if (this.data === null) return null;
    let current = this;
    while (current.left) current = current.left;
    return current.data;
  }

  max() {
    if (this.data === null) return null;
    let current = this;
    while (current.right) current = current.right;
    return current.data;
  }

  remove(data) {
    if (this.data === null) return null;

    if (data < this.data) {
      if (this.left) this.left = this.left.remove(data);
      return this;
    } else if (data > this.data) {
      if (this.right) this.right = this.right.remove(data);
      return this;
    } else {

      if (!this.left && !this.right) return null;
      if (!this.left) return this.right;
      if (!this.right) return this.left;

      let minRight = this.right;
      while (minRight.left) minRight = minRight.left;
      this.data = minRight.data;
      this.right = this.right.remove(minRight.data);
      return this;
    }
  }
}

module.exports = {
  BinarySearchTree
};