//Time: O(N)
//Space: O(1)

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  checkDuplicate(linkedList);
  return linkedList;
  //return null;
}

function checkDuplicate(node) {
  while (node.next !== null && node.value === node.next.value) {
    node.next = node.next.next;
  }

  if (node.next !== null) {
    checkDuplicate(node.next);
  }
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
