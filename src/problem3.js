function problem3(number) {
  let clapCount = 0;

  for (let currentNumber = 1; currentNumber <= number; currentNumber++) {
    clapCount += [...currentNumber.toString()].filter((digit) =>
      [3, 6, 9].includes(parseInt(digit))
    ).length;
  }

  return clapCount;
}

module.exports = problem3;
