const { Console } = require('@woowacourse/mission-utils');

const readLine = (text, callback) => {
  Console.readLine(text, callback);
};

const InputView = {
  readCoachNames(setCoachNames) {
    readLine('코치의 이름을 입력해 주세요. (, 로 구분)', setCoachNames);
  },
};

module.exports = InputView;
