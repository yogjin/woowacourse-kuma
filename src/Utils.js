const { Console } = require('@woowacourse/mission-utils');

class Utils {
  static readLine(text, callback) {
    Console.readLine(`${text}\n`, callback);
  }

  static print(text) {
    Console.print(text);
  }
}

module.exports = Utils;
