//Time: O(nLog(n)) + O(nLog(m)) <== the time complexity of sorting both arrays
//Space O(1) because we aren't storing anything that depends on the inputs

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let pointerOne = 0;
  let pointerTwo = 0;

  let smallestDiff = Infinity;
  let currentDiff = Infinity;
  let smallestPair = [];

  while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
    let firstNum = arrayOne[pointerOne];
    let secondNum = arrayTwo[pointerTwo];
    currentDiff = Math.abs(firstNum - secondNum);
    if (currentDiff < smallestDiff) {
      smallestDiff = currentDiff;
      smallestPair = [firstNum, secondNum];
    }
    if (firstNum < secondNum) {
      pointerOne++;
    } else if (firstNum > secondNum) {
      pointerTwo++;
    } else {
      return [firstNum, secondNum];
    }
  }
  return smallestPair;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;

//Brute force

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  let smallest = Infinity;
  let answerArr;
  for (let i = 0; i < arrayOne.length; i++) {
    let currentOne = arrayOne[i];

    for (let j = 0; j < arrayTwo.length; j++) {
      let currentTwo = arrayTwo[j];
      let compare = Math.abs(currentOne - currentTwo);
      if (compare < smallest) {
        smallest = compare;
        answerArr = [currentOne, currentTwo];
      }
    }
  }
  return answerArr;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
