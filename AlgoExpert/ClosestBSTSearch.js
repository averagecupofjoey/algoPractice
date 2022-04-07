//Best: O(log(n)) time, O(1) space

//Worst: O(n) time, O(1) space

function findClosestValueInBst(tree, target) {
  // Write your code here.
  return findClosestHelper(tree, target, tree.value);
}

function findClosestHelper(tree, target, closest) {
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(target - currentNode.value) < Math.abs(target - closest)) {
      closest = currentNode.value;
    }
    if (currentNode.value > target) {
      currentNode = currentNode.left;
    } else if (currentNode.value < target) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;

// Average time O(log(n)) average space O(log(n))

// worst time and space is O(n)

function findClosestValueInBst(tree, target) {
  // Write your code here.
  return findClosestBstHelper(tree, target, tree.value);
}

function findClosestBstHelper(tree, target, closest) {
  if (tree === null) {
    return closest;
  }
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findClosestBstHelper(tree.left, target, closest);
  }
  if (target > tree.value) {
    return findClosestBstHelper(tree.right, target, closest);
  }
  return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
