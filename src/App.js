const InputView = require('./InputView');
const LottoMachine = require('./LottoMachine');
const OutputView = require('./OutputView');
const { getWinningNumbersFromInput, getBonusNumberFromInput } = require('./utils/common');

class App {
  play() {
    const lottoMachine = new LottoMachine();

    InputView.requestPurchaseAmount((purchasedAmount) => {
      lottoMachine.generateLotto(purchasedAmount);

      const generatedLottos = lottoMachine.getGeneratedLottos();
      OutputView.printGeneratedLottos(generatedLottos);

      InputView.requestWinningNumbers((input) => {
        const lottoWinningNumbers = this.getWinningNumbersFromInput(input);
        lottoMachine.setLottoWinningNumbers(lottoWinningNumbers);

        InputView.requestBonusNumber((input) => {
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

      return lottoNumber;
    });

    return lottoWinningNumbers;
  };

  getBonusNumberFromInput = (input) => {
    const bonusNumber = parseInt(input, 10);

    return bonusNumber;
  };
}

const app = new App();
app.play();

module.exports = App;
