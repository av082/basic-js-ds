const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    return this.items.shift();
  }

  getUnderlyingList() {
    if (this.items.length === 0) return null;

    let head = { value: this.items[0], next: null };
    let current = head;
    for (let i = 1; i < this.items.length; i++) {
      current.next = { value: this.items[i], next: null };
      current = current.next;
    }
    return head;
  }
}

module.exports = {
  Queue
};
