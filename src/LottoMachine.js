const { RESULT, LOTTO_PRICE, ERROR } = require('./utils/constants');
const Lotto = require('./Lotto');
const { getAscending } = require('./utils/common');
const { Random } = require('@woowacourse/mission-utils');

class LottoMachine {
  generatedLottos = [];
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

  #generate() {
    let numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers = getAscending(numbers);

    return numbers;
  }

  generateLotto(purchasedAmount) {
    if (purchasedAmount % LOTTO_PRICE !== 0) throw new Error(ERROR.notThousandWonUnit);

    const number = purchasedAmount / LOTTO_PRICE;

    for (let i = 0; i < number; i++) {
      const lotto = this.#generate();
      this.generatedLottos.push(lotto);
    }
  }

  getGeneratedLottos() {
    return this.generatedLottos;
  }

  getGeneratedLottosCount() {
    return this.generatedLottos.length;
  }

  #getResult(generatedLotto) {
    let matchCount = 0;

    generatedLotto.forEach((number) => {
      if (this.lotto.getWinningNumbers().includes(number)) matchCount += 1;
    });

    switch (matchCount) {
      case 6:
        return RESULT.FIRST;
      case 5:
        if (generatedLotto.includes(this.bonusNumber)) return RESULT.SECOND;
        return RESULT.THIRD;
      case 4:
        return RESULT.FOURTH;
      case 3:
        return RESULT.FIFTH;
      default:
        return RESULT.LAST;
    }
  }

  getStatistic() {
    const statistic = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
    };

    for (const generatedLotto of this.generatedLottos) {
      const result = this.#getResult(generatedLotto);

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
