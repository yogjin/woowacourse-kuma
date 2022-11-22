const { COMMAND } = require('../constants/game');
const MESSAGE = require('../constants/message');

const validateRetryCommand = (retryOrQuit) => {
  if (![COMMAND.RETRY, COMMAND.QUIT].includes(retryOrQuit)) {
    throw new Error(MESSAGE.ERROR.RETRY_INPUT_IS_R_OR_Q);
  }
};

const validateMoveCommand = (upOrDown) => {
  if (![COMMAND.MOVE.UP, COMMAND.MOVE.DOWN].includes(upOrDown)) {
    throw new Error(MESSAGE.ERROR.MOVING_DIRECTION_INPUT_IS_U_OR_D);
  }
};

module.exports = { validateRetryCommand, validateMoveCommand };
