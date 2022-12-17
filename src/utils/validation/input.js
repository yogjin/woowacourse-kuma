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

const isValidCoachInputs = (coachs) => {
  if (!coachs.every((coach) => isValidCoachName(coach))) {
    return handleError('[ERROR] 코치의 이름은 최소 2글자, 최대 4글자이어야 합니다.');
  }
  if (!(coachs.length >= 2 && coachs.length <= 5)) {
    return handleError('[ERROR] 코치의 인원이 최소 2명, 최대 5명 사이여야 합니다.');
  }
  return true;
};

const isValidUnlikeMenus = (unlikeMenus) => {
  if (!(unlikeMenus.length >= 0 && unlikeMenus.length <= 2)) {
    return handleError('[ERROR] 못 먹는 메뉴의 개수는 최소 0개, 최대 2개 사이여야 합니다.');
  }
  return true;
};

module.exports = { isValidCoachInputs, isValidUnlikeMenus };
