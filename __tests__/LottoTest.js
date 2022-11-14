const Lotto = require('../src/Lotto');
const LottoMachine = require('../src/LottoMachine');
const { getAscending } = require('../src/utils/common');
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
});
