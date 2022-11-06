const { Random } = require('@woowacourse/mission-utils');

const getComputerNumber = () => {
  return Random.pickUniqueNumbersInRange(1, 9, 3);
};

const getBallAndStrikeCounts = (computerNumber, userInputNumber) => {
  let ballCount = 0;
  let strikeCount = 0;

  userInputNumber.forEach((digit, index) => {
    if (digit === computerNumber[index]) {
      strikeCount += 1;
    } else if (computerNumber.includes(digit)) {
      ballCount += 1;
    }
  });

  return [ballCount, strikeCount];
};

module.exports = { getComputerNumber, getBallAndStrikeCounts };
