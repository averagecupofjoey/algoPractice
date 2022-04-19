//Time: O(n)
//Space: O(1)

function getNthFib(n) {
  lastTwo = [0, 1];
  let counter = 2;
  while (counter < n) {
    let temp = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = temp;
    counter++;
  }
  if (n < 2) {
    return lastTwo[0];
  } else {
    return lastTwo[1];
  }
  // Write your code here.
}

// Do not edit the line below.
exports.getNthFib = getNthFib;

//Time: O(n)
//Space: O(n)

function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
    return memoize[n];
  }
  // Write your code here.
}

// Do not edit the line below.
exports.getNthFib = getNthFib;

//Time : O(2^n) - for each value of n, two functions are being run
// Space: O(N)

function getNthFib(n) {
  if (n === 1) {
    return 0;
  }

  if (n === 2) {
    return 1;
  }

  return getNthFib(n - 2) + getNthFib(n - 1);

  // Write your code here.
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
