const LottoMachine = require('./LottoMachine');
const OutputView = require('./OutputView');
const { getWinningNumbersFromInput, getBonusNumberFromInput } = require('./utils/common');

class App {
  play() {
    const lottoMachine = new LottoMachine();

    OutputView.requestPurchaseAmount((purchasedAmount) => {
      lottoMachine.generateLotto(purchasedAmount);

      const generatedLottos = lottoMachine.getGeneratedLottos();
      OutputView.printGeneratedLottos(generatedLottos);

      OutputView.requestWinningNumbers((input) => {
        const lottoWinningNumbers = this.getWinningNumbersFromInput(input);
        lottoMachine.setLottoWinningNumbers(lottoWinningNumbers);

        OutputView.requestBonusNumber((input) => {
          const bonusNumber = this.getBonusNumberFromInput(input);
          lottoMachine.setBonusNumber(bonusNumber);

          const statistic = lottoMachine.getStatistic();
          OutputView.printStatistic(statistic);
          OutputView.printRateOfReturn(purchasedAmount, statistic);
        });
      });
    });
  }

  getWinningNumbersFromInput = (input) => {
    const lottoWinningNumbers = input.split(',').map((number) => {
      const lottoNumber = parseInt(number, 10);
      if (!(lottoNumber >= 1 && lottoNumber <= 45)) throw new Error(ERROR.notOneToFourtyFiveRange);

      return lottoNumber;
    });

    return lottoWinningNumbers;
  };

  getBonusNumberFromInput = (input) => {
    const bonusNumber = parseInt(input, 10);
    if (!(bonusNumber >= 1 && bonusNumber <= 45)) throw new Error(ERROR.notOneToFourtyFiveRange);

    return bonusNumber;
  };
}

const app = new App();
app.play();

module.exports = App;
