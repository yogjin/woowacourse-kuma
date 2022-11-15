const { Console } = require('@woowacourse/mission-utils');
const { getRateOfReturn, getEarnedAmount } = require('./utils/common');
const { MESSAGE } = require('./utils/constants');

class OutputView {
  constructor() {}

  static print = (text) => {
    Console.print(text);
  };

  static printGeneratedLottos = (generatedLottos) => {
    OutputView.print(`${generatedLottos.length}개를 구매했습니다.`);
    generatedLottos.forEach((generatedLotto) => {
      OutputView.print(`[${generatedLotto[0]}, ${generatedLotto[1]}, ${generatedLotto[2]}, ${generatedLotto[3]}, ${generatedLotto[4]}, ${generatedLotto[5]}]`);
    });
  };

  static printStatistic = (statistic) => {
    OutputView.print(MESSAGE.STATISTIC.TITLE);
    OutputView.print(MESSAGE.STATISTIC.DIVIDER);
    OutputView.print(MESSAGE.STATISTIC.FIFTH(statistic.FIFTH));
    OutputView.print(MESSAGE.STATISTIC.FOURTH(statistic.FOURTH));
    OutputView.print(MESSAGE.STATISTIC.THIRD(statistic.THIRD));
    OutputView.print(MESSAGE.STATISTIC.SECOND(statistic.SECOND));
    OutputView.print(MESSAGE.STATISTIC.FIRST(statistic.FIRST));
  };

  static printRateOfReturn = (purchasedAmount, statistic) => {
    const earnedAmount = getEarnedAmount(statistic);
    const rateOfReturn = getRateOfReturn(earnedAmount, purchasedAmount);
    OutputView.print(MESSAGE.RATE_OF_RETURN(rateOfReturn));
  };
}

module.exports = OutputView;
