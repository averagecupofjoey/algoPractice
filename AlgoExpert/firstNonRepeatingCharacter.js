// Time: O(n)
// Space: O(1) since the hash table can only have 26 potential entries in it

function firstNonRepeatingCharacter(string) {
  // Write your code here.
  let hash = {};

  for (let i = 0; i < string.length; i++) {
    if (hash[string[i]]) {
      hash[string[i]]++;
    } else {
      hash[string[i]] = 1;
    }
  }

  for (let i = 0; i < string.length; i++) {
    if (hash[string[i]] === 1) {
      return i;
    }
  }
  return -1;
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
