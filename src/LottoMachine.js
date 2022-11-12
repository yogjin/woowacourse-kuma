const { RESULT } = require('./utils/constants');
const Lotto = require('./Lotto');

class LottoMachine {
  generatedLottos = [];

  constructor() {}

  generateLotto(amount) {
    const number = amount / 1000;

    for (let i = 0; i < number; i++) {
      const lotto = Lotto.generate();
      this.generatedLottos.push(lotto);
    }
  }

  getGeneratedLottos() {
    return this.generatedLottos;
  }

  getGeneratedLottosCount() {
    return this.generatedLottos.length;
  }

  getStatistic(lotto, bonusNumber) {
    const statistic = [0, 0, 0, 0, 0];
    for (const generatedLotto of this.generatedLottos) {
      const result = lotto.getResult(generatedLotto, bonusNumber);

      switch (result) {
        case RESULT.FIRST:
          statistic[0] += 1;
          continue;
        case RESULT.SECOND:
          statistic[1] += 1;
          continue;
        case RESULT.THIRD:
          statistic[2] += 1;
          continue;
        case RESULT.FOURTH:
          statistic[3] += 1;
          continue;
        case RESULT.FIFTH:
          statistic[4] += 1;
          continue;
      }
    }

    return statistic;
  }
}

module.exports = LottoMachine;
