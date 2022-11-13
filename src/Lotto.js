const { ERROR } = require('./utils/constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.notSixNumbers);
    } else if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.duplicatedNumbers);
    }
  }

  getWinningNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
