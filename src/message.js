const { Console } = require('@woowacourse/mission-utils');
const { getUserInputNumberFromUserInput } = require('./utils');

const gameStartMessage = () => {
  Console.print('숫자 야구 게임을 시작합니다.');
};

const numberInputRequestMessage = () => {
  let userInputNumber;
  return new Promise((resolve) =>
    Console.readLine('숫자를 입력해주세요 : ', (userInputNumberString) => {
      userInputNumber = getUserInputNumberFromUserInput(userInputNumberString);
      resolve(userInputNumber);
    })
  );
};

const resultMessage = (ballAndStrikeCounts) => {
  const [ballCounts, strikeCounts] = ballAndStrikeCounts;

  if (ballCounts > 0 && strikeCounts > 0) {
    Console.print(`${ballCounts}볼 ${strikeCounts}스트라이크`);
  } else if (ballCounts > 0 && strikeCounts === 0) {
    Console.print(`${ballCounts}볼`);
  } else if (strikeCounts > 0 && ballCounts === 0) {
    Console.print(`${strikeCounts}스트라이크`);
  } else if (strikeCounts === 0 && ballCounts === 0) {
    Console.print(`낫싱`);
  }
  if (strikeCounts === 3) {
    Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    return true;
  }
  return false;
};

const restartMessage = () => {
  return new Promise((resolve) => {
    Console.readLine(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`, (userInputDigit) => {
      if (userInputDigit === '1') {
        resolve(true);
      } else if (userInputDigit === '2') {
        resolve(false);
      }
    });
  });
};

const oneOrTwoValidationMessage = () => {
  Console.print(`1과 2 중 하나로 입력해 주세요.`);
};

const allDigitIsbetweenOneAndNineValidationMessage = () => {
  Console.print(`각 자릿수는 1에서 9사이의 숫자로 입력해 주세요.`);
};

const threeDigitNumberValidationMessage = () => {
  Console.print(`3자리의 수를 입력해 주세요.`);
};

const eachDigitIsUniqueValidationMessage = () => {
  Console.print(`각 자릿수는 서로 다른 숫자로 입력해 주세요.`);
};

const gameTerminationMessage = () => {
  Console.print(`게임이 종료됩니다.`);
};

module.exports = {
  gameStartMessage,
  numberInputRequestMessage,
  resultMessage,
  restartMessage,
  oneOrTwoValidationMessage,
  allDigitIsbetweenOneAndNineValidationMessage,
  threeDigitNumberValidationMessage,
  eachDigitIsUniqueValidationMessage,
  gameTerminationMessage,
};
