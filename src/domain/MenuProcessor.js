const { printStartMenuRecommadationMessage } = require('../ui/OutputView');

class MenuProcessor {
  start() {
    this.#startProcess();
  }

  #startProcess() {
    printStartMenuRecommadationMessage();
  }
}

module.exports = MenuProcessor;
