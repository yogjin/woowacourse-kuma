const { Console } = require('@woowacourse/mission-utils');

class Utils {
  static readLine(text, callback) {
    Console.readLine(`${text}\n`, callback);
  }

  static print(text) {
    Console.print(text);
  }

  static getAscending(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

module.exports = Utils;
