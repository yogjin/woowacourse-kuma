const { Console } = require('@woowacourse/mission-utils');

const readLine = (text, callback) => {
  Console.readLine(text, callback);
};

const InputView = {
  readCoachNames(setCoachNames) {
    readLine('코치의 이름을 입력해 주세요. (, 로 구분)', setCoachNames);
  },

  readUnlikeMenu(name, setUnlikeMenu) {
    readLine(`${name}(이)가 못 먹는 메뉴를 입력해 주세요.`, setUnlikeMenu);
  },
};

module.exports = InputView;
