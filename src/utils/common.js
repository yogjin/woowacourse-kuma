const getAscending = (numbers) => {
  return numbers.sort((a, b) => a - b);
};

const getRateOfReturn = (earnedAmount, purchasedAmount) => {
  return ((earnedAmount / purchasedAmount) * 100).toFixed(1);
};

const getEarnedAmount = (statistic) => {
  let earnedAmount = 0;
  const prizeMoneys = [2000000000, 30000000, 1500000, 50000, 5000];

  prizeMoneys.forEach((prizeMoney, index) => (earnedAmount += prizeMoney * statistic[index]));

  return earnedAmount;
};

module.exports = { getAscending, getRateOfReturn, getEarnedAmount };
