const { COMMAND } = require('../constants/game');
const MESSAGE = require('../constants/message');

const validateRetryCommand = (retryOrQuit) => {
  if (![COMMAND.RETRY, COMMAND.QUIT].includes(retryOrQuit)) {
    throw new Error(MESSAGE.ERROR.RETRY_INPUT_IS_R_OR_Q);
  }
};

module.exports = { validateRetryCommand };
