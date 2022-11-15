const Lotto = require('../Lotto');
const { ERROR } = require('../utils/constants');

class LottoMachine {
  lotto;
  bonusNumber;

  constructor() {}

  setLottoWinningNumbers(lottoWinningNumbers) {
    this.lotto = new Lotto(lottoWinningNumbers);
  }

  setBonusNumber(bonusNumber) {
    if (this.lotto.getWinningNumbers().includes(bonusNumber)) {
      throw new Error(ERROR.bonusNumberExistInLottoWinnningNumbers);
    } else if (!(bonusNumber >= 1 && bonusNumber <= 45)) {
      throw new Error(ERROR.notOneToFourtyFiveRange);
    }

    this.bonusNumber = bonusNumber;
  }
}

module.exports = LottoMachine;
