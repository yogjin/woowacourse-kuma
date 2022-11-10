const Utils = require('./Utils');

class App {
  play() {
    Utils.readLine(`구입금액을 입력해 주세요.`, (amount) => {});
  }
}

module.exports = App;
