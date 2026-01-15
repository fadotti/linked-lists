export{ Node, LinkedList }

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

class LinkedList {

  append(val) {
    const newNodeInstance = new Node();
    newNodeInstance.value = val;

    function appendNode(currentNode, newNode) {
      if (currentNode.value == undefined && currentNode.nextNode == undefined) {
        currentNode.value = newNode.value;
        currentNode.nextNode = newNode.nextNode;
      } else if (currentNode.nextNode == null) {
        currentNode.nextNode = newNode;
      } else {
        appendNode(currentNode.nextNode, newNode);
      }
    }
    appendNode(this, newNodeInstance);
  }
  
  prepend(val) {
    const newNodeInstance = new Node();
    newNodeInstance.value = val;

    function prependNode(list, newNode) {
      if (list.value == undefined && list.nextNode == undefined) {
        list.value = newNode.value;
        list.nextNode = newNode.nextNode;
      } else {
        const oldListDeepCopy = JSON.parse(JSON.stringify(list));
        list.value = newNode.value;
        list.nextNode = oldListDeepCopy;
      }
    }
    prependNode(this, newNodeInstance);
  }

  size() {
    if (this.value == undefined && this.nextNode == undefined) return 0
    
    function calculateSize(list, currentSize) {
      currentSize++;
      if (list.nextNode == null) return currentSize;
      return calculateSize(list.nextNode, currentSize);
    }

    return calculateSize(this, 0);
  }

  head() {
    return this.value
  }

  tail() {
    function traverseList(list) {
      if (list.nextNode == null) return list.value
      return traverseList(list.nextNode);
    }

    return traverseList(this)
  }

  at(index) {
    function returnValue(list, currentNodeIndex) {
      if (index == currentNodeIndex) return list.value
      if (index < currentNodeIndex) return
      if (list.nextNode == null) return
      return returnValue(list.nextNode, ++currentNodeIndex)
    }

    return returnValue(this, 0)
  }

  pop() {
    //list of length 1
    if (this.nextNode == null) {
      const head = JSON.parse(JSON.stringify(this)).value;
      delete this.value
      delete this.nextNode;
      return head
    }
    //empty list
    if (this.value == undefined) return
    //list of length greater than 1
    const oldHead = JSON.parse(JSON.stringify(this)).value;
    const newListValue = JSON.parse(JSON.stringify(this.nextNode.value));
    const newListNextNode = JSON.parse(JSON.stringify(this.nextNode.nextNode));
    this.value = newListValue;
    this.nextNode = newListNextNode;
    return oldHead;
  }

  contains(value) {
    if (this.value == undefined) return false
    function checkCurrentNode(node) {
      if (node.value == value) return true
      if (node.nextNode == null) return false
      return checkCurrentNode(node.nextNode);
    }

    return checkCurrentNode(this)
  }

  findIndex(value) {
    if (this.value == undefined) return -1
    function checkCurrentNode(node, index) {
      if (node.value == value) return index
      if (node.nextNode == null) return -1
      return checkCurrentNode(node.nextNode, ++index)
    }

    return checkCurrentNode(this, 0)
  }

  toString() {
    if (this.value == undefined) return ''
    function addNodeValues(node, string) {
      if (node.nextNode == null) return string + `( ${node.value} ) -> null`
      return addNodeValues(node.nextNode, string + `( ${node.value} ) -> `)
    }

    return addNodeValues(this, '')
  }

  insertAt(index, ...values) {
    
  }
}