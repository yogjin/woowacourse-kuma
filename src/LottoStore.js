const { Random } = require('@woowacourse/mission-utils');
const { LOTTO_PRICE } = require('./utils/constants');
const { getAscending } = require('./utils/common');

class LottoStore {
  constructor() {}

  static #generate() {
    let numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers = getAscending(numbers);

    return numbers;
  }

  static getGeneratedLottos(purchasedAmount) {
    const generatedLottos = [];

    if (purchasedAmount % LOTTO_PRICE !== 0) throw new Error(ERROR.notThousandWonUnit);

    const number = purchasedAmount / LOTTO_PRICE;

    for (let i = 0; i < number; i++) {
      const lotto = this.#generate();
      generatedLottos.push(lotto);
    }

    return generatedLottos;
  }
}

module.exports = LottoStore;
