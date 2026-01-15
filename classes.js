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
}