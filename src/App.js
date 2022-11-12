const Company = require('./Company');
const { ERROR } = require('./constants');
const Lotto = require('./Lotto');
const Utils = require('./Utils');

class App {
  play() {
    const company = new Company();

    Utils.readLine(`구입금액을 입력해 주세요.`, (amount) => {
      if (amount % 1000 !== 0) throw new Error(ERROR.notThousandWonUnit);

      company.generateLotto(amount);

      const generatedLottosCount = company.getGeneratedLottosCount();
      const generatedLottos = company.getGeneratedLottos();

      Utils.print(`${generatedLottosCount}개를 구매했습니다.`);
      generatedLottos.forEach((generatedLotto) => {
        Utils.print(`[${generatedLotto[0]}, ${generatedLotto[1]}, ${generatedLotto[2]}, ${generatedLotto[3]}, ${generatedLotto[4]}, ${generatedLotto[5]}]`);
      });

      Utils.readLine(`당첨 번호를 입력해 주세요.`, (input) => {
        const lottoWinningNumbers = input.split(',').map((number) => {
          const lottoNumber = parseInt(number, 10);
          if (!(lottoNumber >= 1 && lottoNumber <= 45)) throw new Error(ERROR.notOneToFourtyFiveRange);

          return lottoNumber;
        });

        const lotto = new Lotto(lottoWinningNumbers);

        Utils.readLine(`보너스 번호를 입력해 주세요.`, (input) => {
          const bonusNumber = parseInt(input, 10);
          if (!(bonusNumber >= 1 && bonusNumber <= 45)) throw new Error(ERROR.notOneToFourtyFiveRange);
          if (lottoWinningNumbers.includes(bonusNumber)) throw new Error(ERROR.bonusNumberExistInLottoWinnningNumbers);

          const statistic = company.getStatistic(lotto, bonusNumber);

          Utils.print(`당첨 통계`);
          Utils.print(`---`);
          Utils.print(`3개 일치 (5,000원) - ${statistic[4]}개`);
          Utils.print(`4개 일치 (50,000원) - ${statistic[3]}개`);
          Utils.print(`5개 일치 (1,500,000원) - ${statistic[2]}개`);
          Utils.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${statistic[1]}개`);
          Utils.print(`6개 일치 (2,000,000,000원) - ${statistic[0]}개`);

          const sumOfPrizeMoney = company.getMoney(statistic);
          Utils.print(`총 수익률은 ${company.getRateOfReturn(amount, sumOfPrizeMoney)}%입니다.`);
        });
      });
    });
  }
}

const app = new App();
app.play();

module.exports = App;
