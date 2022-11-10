const Lotto = require('./Lotto');

class Company {
  generatedLottos = [];

  constructor(lotto) {
    this.lotto = lotto;
  }

  generateLotto(amount) {
    const number = amount / 1000;

    for (let i = 0; i < number; i++) {
      const lotto = this.lotto.generate();
      this.generatedLottos.push(lotto);
    }
  }
}

module.exports = Company;
