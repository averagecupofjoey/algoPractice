//Time : O(N)
// Space: O(1)

function isPalindrome(string) {
  // Write your code here.
  let begin = 0;
  let end = string.length - 1;

  while (begin <= end) {
    if (string[begin] !== string[end]) {
      return false;
    }
    begin++;
    end--;
  }
  return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
