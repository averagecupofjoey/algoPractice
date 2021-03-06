// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.

// Time: O(n) where n is the total sum of all elements in array including sub arrays

function productSum(array, multiplier = 1) {
  // Write your code here.
  let sum = 0;
  for (let item of array) {
    if (Array.isArray(item)) {
      sum += productSum(item, multiplier + 1);
    } else {
      sum += item;
    }
  }
  return sum * multiplier;
}

// Do not edit the line below.
exports.productSum = productSum;

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array) {
  // Write your code here.
  let depth = 1;
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    answer = answer + calc(array[i], depth);
  }
  return answer;
}

function calc(item, depth) {
  if (Array.isArray(item)) {
    let sum = 0;
    let initialDepth = depth;
    depth = depth + 1;
    for (let i = 0; i < item.length; i++) {
      sum += calc(item[i], depth) * initialDepth;
    }
    return sum;
  } else {
    return item * depth;
  }
}

// Do not edit the line below.
exports.productSum = productSum;
