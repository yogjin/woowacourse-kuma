const { Console } = require('@woowacourse/mission-utils');

const print = (text) => {
  Console.print(text);
};

const printBlank = () => {
  Console.print('');
};

const closeConsole = () => {
  Console.close();
};

const OutputView = {
  printStartMenuRecommadationMessage() {
    print(`점심 메뉴 추천을 시작합니다.`);
  },
};

module.exports = OutputView;
