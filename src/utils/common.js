const { PRIZE_MONEY } = require('./constants');

const getAscending = (numbers) => {
  return numbers.sort((a, b) => a - b);
};

const getRateOfReturn = (earnedAmount, purchasedAmount) => {
  return ((earnedAmount / purchasedAmount) * 100).toFixed(1);
};

const getEarnedAmount = (statistic) => {
  const earnedAmount =
    PRIZE_MONEY.FIRST * statistic.FIRST +
    PRIZE_MONEY.SECOND * statistic.SECOND +
    PRIZE_MONEY.THIRD * statistic.THIRD +
    PRIZE_MONEY.FOURTH * statistic.FOURTH +
    PRIZE_MONEY.FIFTH * statistic.FIFTH;

  return earnedAmount;
};

module.exports = { getAscending, getRateOfReturn, getEarnedAmount };
