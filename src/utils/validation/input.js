const { print } = require('../../ui/OutputView');

const handleError = (errorMessage) => {
  try {
    throw new Error(errorMessage);
  } catch (error) {
    print(error.message);
    return false;
  }
};

const isValidCoachName = (name) => name.length >= 2 && name.length <= 4;

const isValidCoachNames = (coachs) => {
  if (!coachs.every((coach) => isValidCoachName(coach))) {
    return handleError('[ERROR] 코치의 이름은 최소 2글자, 최대 4글자이어야 합니다.');
  }
  return true;
};

module.exports = { isValidCoachNames };
