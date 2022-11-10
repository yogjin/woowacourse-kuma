const Utils = require('./Utils');

class App {
  play() {
    Utils.readLine(`구입금액을 입력해 주세요.`, (amount) => {
      if (amount % 1000 !== 0) throw new Error('[ERROR] 1,000원 단위로 입력해주세요.');
    });
  }
}

module.exports = App;
