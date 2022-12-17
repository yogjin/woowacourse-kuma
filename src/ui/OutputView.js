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

const OutputView = {};

module.exports = OutputView;
