const { getComputerNumber, getBallAndStrikeCounts } = require('./logic');
const { gameStartMessage, numberInputRequestMessage, resultMessage, restartMessage, gameTerminationMessage } = require('./message');

class Game {
  constructor() {
    this.computerNumber = getComputerNumber();
  }

  async start() {
    gameStartMessage();
    let isClear = false;
    do {
      const userInputNumber = await numberInputRequestMessage();
      const ballAndStrikeCounts = getBallAndStrikeCounts(this.computerNumber, userInputNumber);

      isClear = resultMessage(ballAndStrikeCounts);
      if (isClear) {
        const isRestart = await restartMessage();
        if (isRestart) {
          isClear = false;
          this.computerNumber = getComputerNumber();
        }
      }
    } while (!isClear);
    gameTerminationMessage();
  }
}

const game = new Game();
game.start();
