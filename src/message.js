const { Console } = require('@woowacourse/mission-utils');

const gameStartMessage = () => {
  Console.print('숫자 야구 게임을 시작합니다.');
};

const numberInputRequestMessage = () => {
  Console.readLine('숫자를 입력해주세요 :', (userInputNumber) => {
    resultMessage(userInputNumber);
  });
};

const resultMessage = (ballAndStrikeCounts) => {
  const [ballCounts, strikeCounts] = ballAndStrikeCounts;

  if (ballCounts > 0 && strikeCounts > 0) {
    Console.print(`${ballCounts}볼 ${strikeCounts}스트라이크`);
  } else if (ballCounts > 0 && strikeCounts === 0) {
    Console.print(`${ballCounts}볼`);
  } else if (strikeCounts > 0 && ballCounts === 0) {
    Console.print(`${ballCounts}스트라이크`);
  } else if (strikeCounts === 0 && ballCounts === 0) {
    Console.print(`낫싱`);
  } else if (strikeCounts === 3) {
    Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    Console.print(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`);
  }
};

module.exports = { gameStartMessage, numberInputRequestMessage, resultMessage };
