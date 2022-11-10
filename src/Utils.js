const { Console } = require('@woowacourse/mission-utils');

class Utils {
  static readLine(text, callback) {
    Console.readLine(`${text}\n`, callback);
  }
}

module.exports = Utils;
