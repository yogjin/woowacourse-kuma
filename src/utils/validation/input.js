const { print } = require('../../ui/OutputView');

const handleError = (errorMessage) => {
  try {
    throw new Error(errorMessage);
  } catch (error) {
    print(error.message);
    return false;
  }
};

const isValid = (name) => {
  if (!조건) {
    return handleError('[ERROR] ');
  }
  return true;
};

module.exports = {};
