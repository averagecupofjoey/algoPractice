// Time: O(n^2) space O(n)

function threeNumberSum(array, targetSum) {
  // Write your code here.
  let answerArr = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;
    while (leftPointer < rightPointer) {
      let currentSum = array[i] + array[leftPointer] + array[rightPointer];
      if (currentSum === targetSum) {
        answerArr.push([array[i], array[leftPointer], array[rightPointer]]);
        leftPointer += 1;
        rightPointer -= 1;
      } else if (currentSum < targetSum) {
        leftPointer += 1;
      } else if (currentSum > targetSum) {
        rightPointer -= 1;
      }
    }
  }
  return answerArr;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
