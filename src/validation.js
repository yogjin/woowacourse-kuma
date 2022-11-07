const {
  allDigitIsbetweenOneAndNineValidationMessage,
  eachDigitIsUniqueValidationMessage,
  threeDigitNumberValidationMessage,
} = require('./message');

const isAllDigitbetweenOneAndNine = (userInputNumber) => {
  return userInputNumber.every((digit) => digit >= 1 && digit <= 9);
};

const isThreeDigitNumber = (userInputNumber) => {
  return userInputNumber.length === 3;
};

const isEachDigitUnique = (userInputNumber) => {
  return userInputNumber.length === new Set(userInputNumber).size;
};

const isDigitOneOrTwo = (userInputNumber) => {
  if (userInputNumber.length !== 1) {
    return false;
  }
  const userInputDigit = userInputNumber[0];

  return userInputDigit === 1 || userInputDigit === 2;
};

const validateNumberInput = (userInputNumber) => {
  if (!isAllDigitbetweenOneAndNine(userInputNumber)) {
    throw allDigitIsbetweenOneAndNineValidationMessage;
  }
  if (!isThreeDigitNumber(userInputNumber)) {
    throw threeDigitNumberValidationMessage;
  }
  if (!isEachDigitUnique(userInputNumber)) {
    throw eachDigitIsUniqueValidationMessage;
  }
};

module.exports = { isAllDigitbetweenOneAndNine, isThreeDigitNumber, isEachDigitUnique, isDigitOneOrTwo, validateNumberInput };