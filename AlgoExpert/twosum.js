// Hash
function twoNumberSum(array, targetSum) {
  let hash = {};
  for (let num of array) {
    let compare = targetSum - num;
    if (hash[compare]) {
      return [num, compare];
    } else {
      hash[num] = true;
    }
  }
  return [];
}

//Pointers
function twoNumberSumTwo(array, targetSum) {
  let sortedArr = array.sort((a, b) => a - b);
  let leftPointer = 0;
  let rightPointer = sortedArr.length - 1;

  while (leftPointer < rightPointer) {
    if (sortedArr[leftPointer] + sortedArr[rightPointer] === targetSum) {
      return [sortedArr[leftPointer], sortedArr[rightPointer]];
    } else if (sortedArr[leftPointer] + sortedArr[rightPointer] < targetSum) {
      leftPointer++;
    } else if (sortedArr[leftPointer] + sortedArr[rightPointer] > targetSum) {
      rightPointer--;
    }
  }
  return [];
}

// Brute force
function twoNumberSumBrute(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    let currIdx = i;
    let curr = array[i];
    let newTarget = targetSum - curr;

    for (let j = 0; j < array.length; j++) {
      if (j !== currIdx) {
        if (array[j] === newTarget) {
          return [curr, array[j]];
        }
      }
    }
  }
  return [];
}
