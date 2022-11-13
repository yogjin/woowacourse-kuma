const LottoMachine = require('./LottoMachine');
const OutputView = require('./OutputView');
const { ERROR, LOTTO_PRICE } = require('./utils/constants');

class App {
  play() {
    const lottoMachine = new LottoMachine();

    OutputView.requestPurchaseAmount((purchasedAmount) => {
      if (purchasedAmount % LOTTO_PRICE !== 0) throw new Error(ERROR.notThousandWonUnit);

      lottoMachine.generateLotto(purchasedAmount);

      const generatedLottos = lottoMachine.getGeneratedLottos();
      OutputView.printGeneratedLottos(generatedLottos);

      OutputView.requestWinningNumbers((input) => {
        const lottoWinningNumbers = input.split(',').map((number) => {
          const lottoNumber = parseInt(number, 10);
          if (!(lottoNumber >= 1 && lottoNumber <= 45)) throw new Error(ERROR.notOneToFourtyFiveRange);

          return lottoNumber;
        });

        lottoMachine.setLottoWinningNumbers(lottoWinningNumbers);

        OutputView.requestBonusNumber((input) => {
          const bonusNumber = parseInt(input, 10);
          if (!(bonusNumber >= 1 && bonusNumber <= 45)) throw new Error(ERROR.notOneToFourtyFiveRange);
          if (lottoWinningNumbers.includes(bonusNumber)) throw new Error(ERROR.bonusNumberExistInLottoWinnningNumbers);

          lottoMachine.setBonusNumber(bonusNumber);

          const statistic = lottoMachine.getStatistic();
          OutputView.printStatistic(statistic);
          OutputView.printRateOfReturn(purchasedAmount, statistic);
        });
      });
    });
  }
}

const app = new App();
app.play();

module.exports = App;
