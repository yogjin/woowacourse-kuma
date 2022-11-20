const BridgeGame = require('./BridgeGame');
const { printMap } = require('./OutputView');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    this.bridgeGame.start();
  }
}

const app = new App();
app.play();

module.exports = App;
