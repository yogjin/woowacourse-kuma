const { getComputerNumber } = require('./logic');
const { gameStartMessage } = require('./message');

class Game {
  constructor() {
    this.computerNumber = getComputerNumber();
  }

  start() {
    gameStartMessage();
  }
}

const game = new Game();
game.start();
