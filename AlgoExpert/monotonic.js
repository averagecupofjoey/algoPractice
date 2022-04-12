// O(n) time
// O(1) space

function isMonotonic(array) {
  // Write your code here.
  if (array.length <= 2) {
    return true;
  }

  let start = array[0];
  let end = array[array.length - 1];

  if (start < end) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        return false;
      }
    }
    return true;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < array[i + 1]) {
        return false;
      }
    }
    return true;
  }
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
