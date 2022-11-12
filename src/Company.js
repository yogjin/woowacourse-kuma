const { RESULT } = require('./constants');
const Lotto = require('./Lotto');

class Company {
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

  getStatistics(lotto, bonusNumber) {
    const statisitcs = [0, 0, 0, 0, 0];
    for (const generatedLotto of this.generatedLottos) {
      const result = lotto.getResult(generatedLotto, bonusNumber);

      switch (result) {
        case RESULT.FIRST:
          statisitcs[0] += 1;
          continue;
        case RESULT.SECOND:
          statisitcs[1] += 1;
          continue;
        case RESULT.THIRD:
          statisitcs[2] += 1;
          continue;
        case RESULT.FOURTH:
          statisitcs[3] += 1;
          continue;
        case RESULT.FIFTH:
          statisitcs[4] += 1;
          continue;
      }
    }

    return statisitcs;
  }
}

module.exports = Company;
