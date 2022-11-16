const BridgeGame = require('./BridgeGame');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    this.bridgeGame.start();
  }
}

module.exports = App;
