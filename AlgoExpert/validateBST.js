//Time O(n)
//Space O(d) where d is the depth of the longest branch. Because the recursive calls are put on call stack until you reach a leaf of the branch.

// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  // Write your code here.
  return helper(tree, -Infinity, Infinity);
}

function helper(tree, minValue, maxValue) {
  if (tree === null) {
    return true;
  }
  if (tree.value < minValue || tree.value >= maxValue) {
    return false;
  }
  let isLeftValid = helper(tree.left, minValue, tree.value);
  let isRightValid = helper(tree.right, tree.value, maxValue);
  return isLeftValid && isRightValid;
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;
