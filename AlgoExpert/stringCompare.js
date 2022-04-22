//Time: O(n+m) where n is the number of characters and m is the length of document

// Space: O(c) where c is the number of unique characters in the first string

function generateDocument(characters, document) {
  // Write your code here.
  let hash = {};
  for (let i = 0; i < characters.length; i++) {
    if (hash[characters[i]]) {
      hash[characters[i]] += 1;
    } else {
      hash[characters[i]] = 1;
    }
  }

  for (let item of document) {
    if (item === '') {
      continue;
    }
    if (hash[item] > 0) {
      hash[item]--;
    } else {
      return false;
    }
  }
  return true;
}

// Do not edit the line below.
exports.generateDocument = generateDocument;
