const { getComputerNumber, getBallAndStrikeCounts } = require('./logic');
const { gameStartMessage, numberInputRequestMessage, resultMessage, restartMessage, gameTerminationMessage } = require('./message');
const { validateNumberInput, validateRestartInput } = require('./validation');

class Game {
  constructor() {
    this.computerNumber = getComputerNumber();
  }

  async start() {
    gameStartMessage();
    let isClear = false;
    do {
      const userInputNumber = await numberInputRequestMessage();
      try {
        validateNumberInput(userInputNumber);
      } catch (errorMessage) {
        errorMessage();
        gameTerminationMessage();
        return;
      }
      const ballAndStrikeCounts = getBallAndStrikeCounts(this.computerNumber, userInputNumber);

      isClear = resultMessage(ballAndStrikeCounts);
      if (isClear) {
        const isRestart = await restartMessage();

        try {
          validateRestartInput(isRestart);
        } catch (errorMessage) {
          errorMessage();
          gameTerminationMessage();
          return;
        }

        if (isRestart === 1) {
          isClear = false;
          this.computerNumber = getComputerNumber();
        }
      }
    } while (!isClear);
    gameTerminationMessage();
  }
}

module.exports = Game;
