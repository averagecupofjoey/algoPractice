// Time : O(N)
// Space : O(h) height of deepest node

function invertBinaryTree(tree) {
  // Write your code here.
  swapNodes(tree);
}

function swapNodes(tree) {
  if (tree === null) {
    return;
  }
  let temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
  swapNodes(tree.left);
  swapNodes(tree.right);
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;
