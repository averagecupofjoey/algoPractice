//Time: O(N)
// Space: 0(1)

function longestPeak(array) {
  // Write your code here.
  let beginIdx = 0;
  let endIdx = beginIdx + 1;
  let total = 0;
  while (beginIdx < array.length - 1) {
    let peakFound = false;
    let currentEnd = endIdx;
    let peakLength = 0; //we'll need to add 2 to this if it's greater than 0

    while (
      !peakFound &&
      currentEnd <= array.length - 1 &&
      array[currentEnd] !== array[currentEnd - 1]
    ) {
      if (array[currentEnd] > array[currentEnd - 1]) {
        peakLength++;
        currentEnd++;
      } else if (array[currentEnd] < array[currentEnd - 1] && peakLength > 0) {
        peakFound = true;
      } else {
        break;
      }
    }

    while (
      peakFound &&
      currentEnd <= array.length - 1 &&
      array[currentEnd] < array[currentEnd - 1]
    ) {
      peakLength++;
      currentEnd++;
    }

    if (peakFound && peakLength > 0 && peakLength + 1 > total) {
      total = peakLength + 1;
    }
    endIdx++;
    beginIdx++;
  }
  return total;
}

// Do not edit the line below.
exports.longestPeak = longestPeak;
