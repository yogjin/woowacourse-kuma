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
}

module.exports = Company;
