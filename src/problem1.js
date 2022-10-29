function getSumOfEachDigitOfPage(page) {
  let sum = 0;
  [...page.toString()].forEach((digit) => (sum += parseInt(digit)));

  return sum;
}

function getProductOfEachDigitOfPage(page) {
  let product = 1;
  [...page.toString()].forEach((digit) => (product *= parseInt(digit)));

  return product;
}

function getLargerOfTwoNumbers(x, y) {
  return Math.max(x, y);
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
