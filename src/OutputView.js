const { Console } = require('@woowacourse/mission-utils');
const { getRateOfReturn, getEarnedAmount } = require('./utils/common');

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
    OutputView.print(`당첨 통계`);
    OutputView.print(`---`);
    OutputView.print(`3개 일치 (5,000원) - ${statistic.FIFTH}개`);
    OutputView.print(`4개 일치 (50,000원) - ${statistic.FOURTH}개`);
    OutputView.print(`5개 일치 (1,500,000원) - ${statistic.THIRD}개`);
    OutputView.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${statistic.SECOND}개`);
    OutputView.print(`6개 일치 (2,000,000,000원) - ${statistic.FIRST}개`);
  };

  static printRateOfReturn = (purchasedAmount, statistic) => {
    const earnedAmount = getEarnedAmount(statistic);
    const rateOfReturn = getRateOfReturn(earnedAmount, purchasedAmount);
    OutputView.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  };
}

module.exports = OutputView;
