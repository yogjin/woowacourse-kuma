const { readCoachNames } = require('../ui/InputView');
const { printStartMenuRecommadationMessage } = require('../ui/OutputView');

class MenuProcessor {
  #coachs = [];

  start() {
    this.#startProcess();
  }

  #startProcess() {
    printStartMenuRecommadationMessage();
    this.#setCoachNamesProcess();
  }

  // 코치 이름 받기
  #setCoachNames(input) {
    this.#coachs = input.split(',').map((name) => name.trim());
  }

  #setCoachNamesProcess() {
    readCoachNames(this.#setCoachNames.bind(this));
  }
}

module.exports = MenuProcessor;
