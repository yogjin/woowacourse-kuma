const LottoMachine = require('./LottoMachine');
const { ERROR, LOTTO_PRICE } = require('./utils/constants');
const Lotto = require('./Lotto');
const { readLine, print, printGeneratedLottos, printStatistic, printRateOfReturn } = require('./utils/console');

class App {
  play() {
    const lottoMachine = new LottoMachine();

    readLine(`구입금액을 입력해 주세요.`, (purchasedAmount) => {
      if (purchasedAmount % LOTTO_PRICE !== 0) throw new Error(ERROR.notThousandWonUnit);

      lottoMachine.generateLotto(purchasedAmount);

      const generatedLottos = lottoMachine.getGeneratedLottos();
      printGeneratedLottos(generatedLottos);

      readLine(`당첨 번호를 입력해 주세요.`, (input) => {
        const lottoWinningNumbers = input.split(',').map((number) => {
          const lottoNumber = parseInt(number, 10);
          if (!(lottoNumber >= 1 && lottoNumber <= 45)) throw new Error(ERROR.notOneToFourtyFiveRange);

          return lottoNumber;
        });

        const lotto = new Lotto(lottoWinningNumbers);

        readLine(`보너스 번호를 입력해 주세요.`, (input) => {
          const bonusNumber = parseInt(input, 10);
          if (!(bonusNumber >= 1 && bonusNumber <= 45)) throw new Error(ERROR.notOneToFourtyFiveRange);
          if (lottoWinningNumbers.includes(bonusNumber)) throw new Error(ERROR.bonusNumberExistInLottoWinnningNumbers);

          const statistic = lottoMachine.getStatistic(lotto, bonusNumber);
          printStatistic(statistic);
          printRateOfReturn(purchasedAmount, statistic);
        });
      });
    });
  }
}

const app = new App();
app.play();

module.exports = App;
