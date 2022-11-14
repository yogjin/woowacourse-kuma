const { Console } = require('@woowacourse/mission-utils');

class InputView {
  constructor() {}

  static readLine = (text, callback) => {
    Console.readLine(`${text}\n`, callback);
  };

  static requestPurchaseAmount = (callback) => {
    InputView.readLine(`구입금액을 입력해 주세요.`, callback);
  };

  static requestWinningNumbers = (callback) => {
    InputView.readLine(`당첨 번호를 입력해 주세요.`, callback);
  };

  static requestBonusNumber = (callback) => {
    InputView.readLine(`보너스 번호를 입력해 주세요.`, callback);
  };
}

module.exports = InputView;
