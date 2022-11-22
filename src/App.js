const BridgeGame = require('./BridgeGame');
const { BridgeGameProcessor } = require('./BridgeGameProcessor');
const { printMap } = require('./OutputView');

class App {
  constructor() {
    this.BridgeGameProcessor = new BridgeGameProcessor();
  }

  play() {
    this.BridgeGameProcessor.start();
  }
}

const app = new App();
app.play();

module.exports = App;
