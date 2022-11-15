const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Player = require('./Player');
const LottoMachine = require('./LottoMachine');
const { MESSAGE } = require('./utils/constants');

class Game {
  constructor() {}

  start() {
    const player = new Player();
    const lottoMachine = new LottoMachine();

    InputView.requestPurchaseAmount((purchasedAmount) => {
      player.purchaseLottos(purchasedAmount);

      const purchasedLottos = player.getPurchasedLottos();
      OutputView.printPurchasedLottos(purchasedLottos);

      InputView.requestWinningNumbers((input) => {
        const lottoWinningNumbers = this.getWinningNumbersFromInput(input);
        lottoMachine.setLottoWinningNumbers(lottoWinningNumbers);

        InputView.requestBonusNumber((input) => {
          const bonusNumber = this.getBonusNumberFromInput(input);
          lottoMachine.setBonusNumber(bonusNumber);

          player.calculateStatistic(lottoWinningNumbers, bonusNumber);
          const statistic = player.getStatistic();

          OutputView.printStatistic(statistic);
          OutputView.printRateOfReturn(purchasedAmount, statistic);

          this.terminate();
        });
      });
    });
  }

  terminate() {
    OutputView.print(MESSAGE.TERMINATE_GAME);
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

module.exports = Game;
