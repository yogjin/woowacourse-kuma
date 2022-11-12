const { Console } = require('@woowacourse/mission-utils');

const readLine = (text, callback) => {
  Console.readLine(`${text}\n`, callback);
};

const print = (text) => {
  Console.print(text);
};

module.exports = { readLine, print };
