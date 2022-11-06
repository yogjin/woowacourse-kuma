const isAllDigitbetweenOneAndNine = (userInputNumber) => {
  return userInputNumber.every((digit) => digit >= 1 && digit <= 9);
};

module.exports = { isAllDigitbetweenOneAndNine };
