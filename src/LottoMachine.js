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
    const statistic = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
    };

    for (const generatedLotto of this.generatedLottos) {
      const result = lotto.getResult(generatedLotto, bonusNumber);

      switch (result) {
        case RESULT.FIRST:
          statistic.FIRST += 1;
          continue;
        case RESULT.SECOND:
          statistic.SECOND += 1;
          continue;
        case RESULT.THIRD:
          statistic.THIRD += 1;
          continue;
        case RESULT.FOURTH:
          statistic.FOURTH += 1;
          continue;
        case RESULT.FIFTH:
          statistic.FIFTH += 1;
          continue;
      }
    }

    return statistic;
  }
}

module.exports = LottoMachine;
