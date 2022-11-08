const { Console, Random } = require('@woowacourse/mission-utils');
const Game = require('../src/game');
const App = require('../src/App');
const { getComputerNumber } = require('../src/logic');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getReadLineLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'readLine');
  logSpy.mockClear();
  return logSpy;
};

/*
 * 게임 실행 흐름 테스트
 */

describe('게임 시작', () => {
  const logSpy = getLogSpy();

  it('컴퓨터의 수 생성', () => {
    const computerNumber = getComputerNumber();

    // 3자리의 수인가?
    expect(computerNumber).toHaveLength(3);

    // 1에서 9사이의 숫자인가?
    computerNumber.forEach((digit) => {
      expect(digit).toBeGreaterThanOrEqual(1);
      expect(digit).toBeLessThanOrEqual(9);
    });

    // 각 자릿 수가 각각 서로 다른 수인가?
    expect(computerNumber).toHaveLength(new Set(computerNumber).size);
  });
