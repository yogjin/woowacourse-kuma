const RESULT = Object.freeze({
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
  LAST: 6,
});

const ERROR = Object.freeze({
  notThousandWonUnit: '[ERROR] 1,000원 단위로 입력해주세요.',
  notSixNumbers: '[ERROR] 로또 번호는 6개여야 합니다.',
  duplicatedNumbers: '[ERROR] 로또 번호에 중복된 숫자가 있으면 안됩니다.',
  notOneToFourtyFiveRange: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  bonusNumberExistInLottoWinnningNumbers: '[ERROR] 보너스 번호는 당첨 번호와 다른 숫자여야 합니다.',
});

module.exports = { RESULT, ERROR };
