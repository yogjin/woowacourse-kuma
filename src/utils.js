const getUserInputNumberFromUserInput = (userInput) => {
  return Array.from(userInput, (digit) => parseInt(digit, 10));
};
module.exports = { getUserInputNumberFromUserInput };
