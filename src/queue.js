const { NotImplementedError } = require('../extensions/index.js')

const { ListNode } = require('../extensions/list-node.js')

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
    this.items = null
  }

  getUnderlyingList() {
    return this.items
  }

  enqueue(value) {
    if (this.items === null) {
      this.items = new ListNode(value)
    } else {
      const lastNode = this.findLastNode(this.items)
      lastNode.next = new ListNode(value)
    }
  }

  findLastNode(node) {
    if (node.next === null) {
      return node
    }

    return this.findLastNode(node.next)
  }

  dequeue() {
    const head = this.items.value
    this.items = this.items.next

    return head
  }
}

module.exports = {
  Queue,
}
