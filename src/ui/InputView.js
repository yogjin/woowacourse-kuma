const { Console } = require('@woowacourse/mission-utils');

const readLine = (text, callback) => {
  Console.readLine(text, callback);
};

const InputView = {
  readSomething(callbackBusinessLogic) {
    readLine('~를 입력해 주세요.', callbackBusinessLogic);
  },
};

module.exports = InputView;
