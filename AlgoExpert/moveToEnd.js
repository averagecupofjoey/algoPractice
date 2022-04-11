//Time: O(n)
//Space: O(1)

function moveElementToEnd(array, toMove) {
  let startPointer = 0;
  let endPointer = array.length - 1;

  while (startPointer < endPointer) {
    while (startPointer < endPointer && array[endPointer] === toMove) {
      endPointer--;
    }
    if (array[startPointer] === toMove) {
      array[startPointer] = array[endPointer];
      array[endPointer] = toMove;
    }
    startPointer++;
  }
  return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
