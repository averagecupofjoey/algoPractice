//Time: O(n)
//Space: O(n)

function runLengthEncoding(string) {
  // Write your code here.
  let counter = 0;
  let answerStr = '';
  let current = '';
  console.log(string, 'length:', string.length);
  for (let i = 0; i < string.length; i++) {
    if (counter === 0) {
      current = string[i];
      counter += 1;
      if (i === string.length - 1) {
        answerStr = answerStr + counter + current;
      }
    } else if (counter < 9 && current === string[i]) {
      counter++;
      if (i === string.length - 1) {
        answerStr = answerStr + counter + current;
      }
    } else {
      answerStr = answerStr + counter + current;
      counter = 1;
      current = string[i];
      if (i === string.length - 1) {
        answerStr = answerStr + counter + current;
      }
    }
  }
  return answerStr;
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
