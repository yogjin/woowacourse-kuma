/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const { MAP, COMMAND } = require('./utils/constants/game');
const MESSAGE = require('./utils/constants/message');

//  제공된 OutputView 객체를 활용해 구현해야 한다.
//  OutputView의 파일 경로는 변경할 수 있다.
//  OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
//  값 출력을 위해 필요한 메서드를 추가할 수 있다.
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(history) {
    // { position: this.#next, upOrDown, isSuccess }
    let upPrint = MAP.LEFT_BRACKET;
    let downPrint = MAP.LEFT_BRACKET;
    history.forEach((item) => {
      if (item.position > 0) {
        upPrint += MAP.DIVIDER;
        downPrint += MAP.DIVIDER;
      }
      const isSuccess = item.isSuccess;
      if (item.upOrDown === COMMAND.MOVE.UP) {
        upPrint += MAP.MOVE_RESULT_ICON(isSuccess);
        downPrint += MAP.BLANK;
      } else {
        upPrint += MAP.BLANK;
        downPrint += MAP.MOVE_RESULT_ICON(isSuccess);
      }
    });
    upPrint += MAP.RIGHT_BRACKET;
    downPrint += MAP.RIGHT_BRACKET;

    Console.print(upPrint);
    Console.print(downPrint);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(history, tryCount) {
    const isSuccess = history[history.length - 1].isSuccess;

    Console.print(MESSAGE.OUTPUT.FINAL_GAME_RESULT);
    OutputView.printMap(history);
    Console.print(MESSAGE.OUTPUT.GAME_SUCCESS_OR_NOT(isSuccess));
    Console.print(MESSAGE.OUTPUT.ATTEMPTS_NUMBER(tryCount));
  },

  printGameStartMessage() {
    Console.print(MESSAGE.OUTPUT.GAME_START);
  },
};

module.exports = OutputView;
