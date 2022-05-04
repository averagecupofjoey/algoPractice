//Time: O(n)
//Space: O(n)

function arrayOfProducts(array) {
  // Write your code here.
  let newArr = [];
  let leftArr = [];
  let rightArr = [];

  let leftProd = 1;
  for (let i = 0; i < array.length; i++) {
    leftArr[i] = leftProd;
    leftProd *= array[i];
  }

  let rightProd = 1;
  for (let i = array.length - 1; i > -1; i--) {
    rightArr[i] = rightProd;
    rightProd *= array[i];
  }

  for (let i = 0; i < array.length; i++) {
    newArr.push(leftArr[i] * rightArr[i]);
  }

  return newArr;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;

//Time: O(n^2)
//Space: O(n)

function arrayOfProducts(array) {
  // Write your code here.
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    let leftPointer = 0;
    let rightPointer = array.length - 1;
    let leftProduct = 1;
    let rightProduct = 1;
    while (leftPointer !== i) {
      leftProduct *= array[leftPointer];
      leftPointer++;
    }
    while (rightPointer !== i) {
      rightProduct *= array[rightPointer];
      rightPointer--;
    }

    newArr.push(leftProduct * rightProduct);
  }
  return newArr;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
