const Lotto = require('../src/Lotto');
const LottoMachine = require('../src/LottoMachine');
const { getAscending, getRateOfReturn, getEarnedAmount } = require('../src/utils/common');
const { LOTTO_PRICE } = require('../src/utils/constants');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1~45 사이의 숫자가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });
});

describe('LottoMachine 클래스 테스트', () => {
  const lottoWinningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;
  let lottoMachine;
  beforeEach(() => {
    lottoMachine = new LottoMachine();
    lottoMachine.setLottoWinningNumbers(lottoWinningNumbers);
    lottoMachine.setBonusNumber(bonusNumber);
  });

  describe('generateLotto(purchasedAmount)', () => {
    test(`로또 구입 금액이 ${LOTTO_PRICE}원으로 나누어 떨어지지 않는 경우 예외가 발생한다.`, () => {
      const purchasedAmount = 1200;

      expect(() => {
        lottoMachine.generateLotto(purchasedAmount);
      }).toThrow('[ERROR]');
    });

    test('구입 금액에 해당하는 만큼 로또 번호를 생성한다.', () => {
      const purchasedAmount = 8000;

      lottoMachine.generateLotto(purchasedAmount);

      expect(lottoMachine.generatedLottos.length).toEqual(8);
    });

    test('생성한 각 로또 번호는 오름차순으로 정렬되어 있다.', () => {
      const purchasedAmount = 100000;
      lottoMachine.generateLotto(purchasedAmount);
      const generatedLottos = lottoMachine.generatedLottos;

      generatedLottos.forEach((generatedLotto) => {
        const ascendingGeneratedLotto = getAscending(generatedLotto);

        expect(generatedLotto).toEqual(ascendingGeneratedLotto);
      });
    });

    test('생성한 각 로또 번호는 중복되지 않는 6개의 숫자로 구성된다.', () => {
      const purchasedAmount = 100000;
      lottoMachine.generateLotto(purchasedAmount);
      const generatedLottos = lottoMachine.generatedLottos;

      generatedLottos.forEach((generatedLotto) => {
        const generatedLottoSet = new Set(generatedLotto);

        expect(generatedLottoSet.size).toEqual(6);
      });
    });
  });

  describe('getStatistic()', () => {
    test('당첨 내역을 구할 수 있다.', () => {
      lottoMachine.generatedLottos = [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 7],
        [1, 2, 3, 4, 5, 8],
        [1, 2, 3, 4, 44, 45],
        [1, 2, 3, 43, 44, 45],
        [4, 5, 6, 43, 44, 45],
      ];

      const statistic = lottoMachine.getStatistic();

      expect(statistic).toEqual({
        FIRST: 1,
        SECOND: 1,
        THIRD: 1,
        FOURTH: 1,
        FIFTH: 2,
      });
    });
  });

  describe('setBonusNumber(bonusNumber)', () => {
    test('보너스 번호가 1~45 사이의 숫자가 아닌 경우 예외가 발생한다.', () => {
      expect(() => {
        lottoMachine.setBonusNumber(0);
      }).toThrow('[ERROR]');
    });

    test('보너스 번호가 당첨 번호에 존재하는 숫자인 경우 예외가 발생한다.', () => {
      lottoMachine.setLottoWinningNumbers([1, 2, 3, 4, 5, 6]);

      expect(() => {
        lottoMachine.setBonusNumber(1);
      }).toThrow('[ERROR]');
    });
  });
});

describe('common 유틸 테스트', () => {
  test('getAscending(numbers) - 오름차순으로 정렬한 numbers를 리턴한다.', () => {
    const numbers = [1, 3, 4, 2, 6, 5];

    const ascendingNumbers = getAscending(numbers);

    expect(ascendingNumbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('getRateOfReturn(earnedAmount, purchasedAmount) - 로또 수익률을 구할 수 있다. (소수점 둘째 자리에서 반올림)', () => {
    const earnedAmount = 70000;
    const purchasedAmount = 230000;

    const rateOfReturn = getRateOfReturn(earnedAmount, purchasedAmount);

    expect(rateOfReturn).toEqual(30.4);
  });

  test('getEarnedAmount(statistic) - 구매한 로또 전체의 당첨금을 구할 수 있다.', () => {
    const statistic = {
      FIRST: 1,
      SECOND: 1,
      THIRD: 1,
      FOURTH: 1,
      FIFTH: 2,
    };

    const earnedAmount = getEarnedAmount(statistic);

    expect(earnedAmount).toEqual(2031560000);
  });
});
