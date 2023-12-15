const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(data) {
    const newNode = new Node(data)

    if (this.root() === null) {
      this.rootNode = newNode
    } else {
      this.insertNode(this.root(), newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  has(data) {
    const targetNode = this.search(this.root(), data)

    if (targetNode === null) {
      return false
    }

    return targetNode.data === data
  }

  search(node, data) {
    if (node === null) {
      return null
    }

    if (data === node.data) {
      return node
    }

    if (data < node.data) {
      return this.search(node.left, data)
    }

    if (data > node.data) {
      return this.search(node.right, data)
    }
  }

  find(data) {
    return this.search(this.root(), data)
  }

  remove(data) {
    this.rootNode = this.removeNode(this.root(), data)
  }

  removeNode(node, val) {
    if (node === null) {
      return null
    }

    if (val < node.data) {
      node.left = this.removeNode(node.left, val)
      return node
    }

    if (val > node.data) {
      node.right = this.removeNode(node.right, val)
      return node
    }

    if (val === node.data) {
      if (node.left === null && node.right === null) {
        node = null
        return node
      }

      if (node.left === null) {
        node = node.right
        return node
      }

      if (node.right === null) {
        node = node.left
        return node
      }

      var tmp = this.findMin(node.right)
      node.data = tmp.data

      node.right = this.removeNode(node.right, tmp.data)

      return node
    }
  }

  min() {
    if (this.root() === null) {
      return null
    }

    return this.findMin(this.root()).data
  }

  findMin(node) {
    if (node.left === null) {
      return node
    }

    return this.findMin(node.left)
  }

  max() {
    if (this.root() === null) {
      return null
    }

    return this.findMax(this.root()).data
  }

  findMax(node) {
    if (node.right === null) {
      return node
    }

    return this.findMax(node.right)
  }
}

module.exports = {
  BinarySearchTree,
}
