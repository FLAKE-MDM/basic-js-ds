const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree
  }

  add(value) {
    this.rootTree = addNode(this.rootTree, value);

    function addNode(node, value){
      if(!node){
        return new Node(value)
      }

      if(node.data === value){
        return node
      }

      if(value < node.data){
        node.left = addNode(node.left, value)
      } else{
        node.right = addNode(node.right, value)
      }

      return node
    }

  }

  has(value) {
    return hasValue(this.rootTree, value)

    function hasValue(node, value){
      if(!node){
        return false
      }

      if(node.data == value){
        return true
      }

      if(value < node.data){
        return hasValue(node.left, value)
      } else{
        return hasValue(node.right, value)
      }
    }
  }

  find(value) {
    return findValue(this.rootTree, value)

    function findValue(node, value){
      if(!node){
        return null
      }

      if(node.data == value){
        return node
      }

      if(value < node.data){
        return findValue(node.left, value)
      } else{
        return findValue(node.right, value)
      }
    }
  }

  remove(value) {
    this.rootTree = removeNode(this.rootTree, value)

    function removeNode(node, value){
      if(!node){
        return null
      }

      if(value < node.data){
        node.left = removeNode(node.left, value);
        return node
      } else if(value > node.data){
        node.right = removeNode(node.right, value);
        return node
      } else{
        if(!node.left && !node.right){
          return null
        }

        if(!node.left){
          node = node.right;
          return node;
        }

        if(!node.right){
          node = node.left;
          return node;
        }

        const maxLeft = maxValue(node.left)
        node.data = maxLeft;
        node.left = removeNode(node.left, maxLeft)

        return node

        function maxValue(node){
          if(!node){
            return 0
          }

          if(!node.right){
            return node.data
          }

          return maxValue(node.right);
        }
      }
    }
  }

  min() {
    return minValue(this.rootTree)

    function minValue(node){
      if(!node){
        return 0
      }

      if(node.left){
        return minValue(node.left);
      }

      return node.data
    }
  }

  max() {
    return maxValue(this.rootTree)

    function maxValue(node){
      if(!node){
        return 0
      }

      if(node.right){
        return maxValue(node.right);
      } else{
        return node.data
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};