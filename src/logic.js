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

// 낫싱 여부 판단
const isNothing = (ballAndStrikeCounts) => {
  const [ballCount, strikeCount] = ballAndStrikeCounts;

  return ballCount === 0 && strikeCount === 0;
};

module.exports = { getComputerNumber, getBallAndStrikeCounts, isNothing };
