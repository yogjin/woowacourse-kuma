const { Console } = require('@woowacourse/mission-utils');
const { getRateOfReturn, getEarnedAmount } = require('./common');

const readLine = (text, callback) => {
  Console.readLine(`${text}\n`, callback);
};

const print = (text) => {
  Console.print(text);
};

const printGeneratedLottos = (generatedLottos) => {
  print(`${generatedLottos.length}개를 구매했습니다.`);
  generatedLottos.forEach((generatedLotto) => {
    print(`[${generatedLotto[0]}, ${generatedLotto[1]}, ${generatedLotto[2]}, ${generatedLotto[3]}, ${generatedLotto[4]}, ${generatedLotto[5]}]`);
  });
};

const printStatistic = (statistic) => {
  print(`당첨 통계`);
  print(`---`);
  print(`3개 일치 (5,000원) - ${statistic.FIFTH}개`);
  print(`4개 일치 (50,000원) - ${statistic.FOURTH}개`);
  print(`5개 일치 (1,500,000원) - ${statistic.THIRD}개`);
  print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${statistic.SECOND}개`);
  print(`6개 일치 (2,000,000,000원) - ${statistic.FIRST}개`);
};

const printRateOfReturn = (purchasedAmount, statistic) => {
  const earnedAmount = getEarnedAmount(statistic);
  const rateOfReturn = getRateOfReturn(earnedAmount, purchasedAmount);
  print(`총 수익률은 ${rateOfReturn}%입니다.`);
};

module.exports = { readLine, print, printGeneratedLottos, printStatistic, printRateOfReturn };
