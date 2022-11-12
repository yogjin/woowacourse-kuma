const { Random } = require('@woowacourse/mission-utils');
const { getAscending } = require('./utils/common');
const { RESULT, ERROR } = require('./utils/constants');

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

  static generate() {
    let numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers = getAscending(numbers);

    return numbers;
  }

  getResult(userNumbers, bonusNumber) {
    let matchCount = 0;

    userNumbers.forEach((userNumber) => {
      if (this.#numbers.includes(userNumber)) matchCount += 1;
    });

    switch (matchCount) {
      case 6:
        return RESULT.FIRST;
      case 5:
        if (this.#numbers.includes(bonusNumber)) return RESULT.SECOND;
        return RESULT.THIRD;
      case 4:
        return RESULT.FOURTH;
      case 3:
        return RESULT.FIFTH;
      default:
        return RESULT.LAST;
    }
  }
}

module.exports = Lotto;
