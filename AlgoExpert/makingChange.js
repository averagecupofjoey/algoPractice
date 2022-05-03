function numberOfWaysToMakeChange(n, denoms) {
  // Write your code here.
  const possibilities = new Array(n + 1).fill(0);
  possibilities[0] = 1;

  for (let denom of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (denom <= amount) {
        possibilities[amount] += possibilities[amount - denom];
      }
    }
  }
  return possibilities[n];
}

// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;
