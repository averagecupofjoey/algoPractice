// Time: O(N)
// Space: O(N)

function spiralTraverse(array) {
  // Write your code here.
  let startColIdx = 0;
  let startRowIdx = 0;
  let endColIdx = array[startColIdx].length - 1;
  let endRowIdx = array.length - 1;
  let answerArr = [];

  pushNums(array, startColIdx, startRowIdx, endColIdx, endRowIdx, answerArr);

  return answerArr;
}

function pushNums(array, startCol, startRow, endCol, endRow, answerArray) {
  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      answerArray.push(array[startRow][i]);
    }
    for (let i = startRow + 1; i <= endRow; i++) {
      answerArray.push(array[i][endCol]);
    }
    for (let i = endCol - 1; i >= startCol; i--) {
      if (startRow === endRow) break;
      answerArray.push(array[endRow][i]);
    }
    for (let i = endRow - 1; i >= startRow + 1; i--) {
      if (startCol === endCol) break;
      answerArray.push(array[i][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
