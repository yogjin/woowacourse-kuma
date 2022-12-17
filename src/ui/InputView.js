const { Console } = require('@woowacourse/mission-utils');

const readLine = (text, callback) => {
  Console.readLine(text, callback);
};

const InputView = {
  readCoachNames(setCoachNames) {
    readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n', setCoachNames);
  },

  readUnlikeMenu(name, setUnlikeMenu) {
    readLine(`\n${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`, setUnlikeMenu);
  },
};

module.exports = InputView;
