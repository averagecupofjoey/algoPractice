// Time: O(N)
// Space: O(1)

function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  }

  let first = array[0];
  let second = Math.max(array[0], array[1]);

  for (let i = 2; i < array.length; i++) {
    let current = Math.max(second, first + array[i]);
    first = second;
    second = current;
  }
  return second;
}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
