const { Random } = require('@woowacourse/mission-utils');

const getComputerNumber = () => {
  return Random.pickUniqueNumbersInRange(1, 9, 3);
};

module.exports = { getComputerNumber };
