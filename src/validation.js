const isAllDigitbetweenOneAndNine = (userInputNumber) => {
  return userInputNumber.every((digit) => digit >= 1 && digit <= 9);
};

const isThreeDigitNumber = (userInputNumber) => {
  return userInputNumber.length === 3;
};

module.exports = { isAllDigitbetweenOneAndNine, isThreeDigitNumber };
