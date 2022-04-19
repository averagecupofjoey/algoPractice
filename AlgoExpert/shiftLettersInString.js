function caesarCipherEncryptor(string, key) {
  let newString = '';
  let oldKey = key % 26;

  for (let i = 0; i <= string.length - 1; i++) {
    let oldStart = string.charCodeAt(i);
    let startKey = oldKey + oldStart;

    if (startKey > 122) {
      startKey = (startKey % 122) + 96;
    }

    let newLetter = String.fromCharCode(startKey);
    newString = newString + newLetter;

    startKey++;
  }
  return newString;
}
// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
