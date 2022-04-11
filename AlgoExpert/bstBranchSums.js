// Time = O(n), you have to traverse through every node
// Space = O(n) <=== the number of leaf nodes on a balanced BST is roughly 1/2 of the entire tree. Therefore space is O(n)/2 which translates to O(n)

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  let answerArr = [];
  calcBranchSums(root, 0, answerArr);
  return answerArr;
}

function calcBranchSums(node, currentSum, arr) {
  if (node === null) {
    return;
  }
  let newSum = currentSum + node.value;
  if ((node.right === null) & (node.left === null)) {
    arr.push(newSum);
    return;
  }
  calcBranchSums(node.left, newSum, arr);
  calcBranchSums(node.right, newSum, arr);
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
