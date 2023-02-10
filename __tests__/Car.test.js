const Car = require('../src/model/Car');
const { randomGenerator } = require('../src/utils/common');
const { GAME } = require('../src/utils/constants');

const mockRandoms = (numbers) => {
  randomGenerator.getBetween = jest.fn();
  numbers.reduce((acc, cur) => {
    return acc.mockReturnValueOnce(cur);
  }, randomGenerator.getBetween);
};

describe('Car 클래스', () => {
  it(`자동차는 ${GAME.MOVE_CONDITION.min}와 ${
    GAME.MOVE_CONDITION.max - 1
  } 사이에서 무작위 값이 4 이상일 경우 전진한다.`, () => {
    const car = new Car('name');
    const randomNumbers = [4, 5];

    mockRandoms(randomNumbers);
    randomNumbers.forEach(() => {
      car.move();
    });

    expect(car.getDistance()).toBe(2);
  });

  it(`자동차는 ${GAME.MOVE_CONDITION.min}와 ${
    GAME.MOVE_CONDITION.max - 1
  } 사이에서 무작위 값이 4 미만일 경우 멈춘다.`, () => {
    const car = new Car('name');
    const randomNumbers = [3, 2];

    mockRandoms(randomNumbers);
    randomNumbers.forEach(() => {
      car.move();
    });

    expect(car.getDistance()).toBe(0);
  });

  it.each([
    [3, true],
    [4, false],
    [5, false],
  ])('자동차가 결승선에 도착했는지 알 수 있다.', (winningDistance, result) => {
    const car = new Car('name');

    mockRandoms([5, 5, 5]);
    car.move();
    car.move();
    car.move();

    expect(car.isFinish(winningDistance)).toEqual(result);
  });
});
