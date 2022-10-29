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

function getScore(pages) {
  let sum = 0;
  let product = 0;

  pages.forEach((page) => {
    sum = getSumOfEachDigitOfPage(page);
    product = getProductOfEachDigitOfPage(page);
  });

  return getLargerOfTwoNumbers(sum, product);
}

function getGameResult(pobiScore, crongScore) {
  let result = -1;

  if (pobiScore > crongScore) {
    result = 1;
  } else if (crongScore > pobiScore) {
    result = 2;
  } else {
    result = 0;
  }

  return result;
}

function problem1(pobi, crong) {
  var answer;

  return answer;
}

module.exports = problem1;
