const { Console } = require('@woowacourse/mission-utils');

const gameStartMessage = () => {
  Console.print('숫자 야구 게임을 시작합니다.');
};

const numberInputRequestMessage = () => {
  Console.readLine('숫자를 입력해주세요 :', (userInputNumber) => {
    resultMessage(userInputNumber);
  });
};

module.exports = { gameStartMessage, numberInputRequestMessage };
