/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const { MAP, COMMAND } = require('../utils/constants/game');
const MESSAGE = require('../utils/constants/message');

//  제공된 OutputView 객체를 활용해 구현해야 한다.
//  OutputView의 파일 경로는 변경할 수 있다.
//  OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
//  값 출력을 위해 필요한 메서드를 추가할 수 있다.
const OutputView = {
  print(text) {
    Console.print(text);
  },

  printBlank() {
    Console.print('');
  },

  close() {
    Console.close();
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(history) {
    const mapPrint = OutputView.drawMap(history);
    OutputView.print(mapPrint.upPrint);
    OutputView.print(mapPrint.downPrint);
    OutputView.printBlank();
  },

  drawMap(history) {
    let mapPrint = {
      upPrint: '',
      downPrint: '',
    };
    mapPrint = OutputView.drawMapStart(mapPrint);
    mapPrint = OutputView.drawMapMove(mapPrint, history);
    mapPrint = OutputView.drawMapEnd(mapPrint);

    return mapPrint;
  },

  drawMapStart(mapPrint) {
    return {
      upPrint: mapPrint.upPrint + MAP.LEFT_BRACKET,
      downPrint: mapPrint.downPrint + MAP.LEFT_BRACKET,
    };
  },

  drawMapEnd(mapPrint) {
    return {
      upPrint: mapPrint.upPrint + MAP.RIGHT_BRACKET,
      downPrint: mapPrint.downPrint + MAP.RIGHT_BRACKET,
    };
  },

  drawMapMove(mapPrint, history) {
    let updatedMapPrint = mapPrint;
    history.forEach((item) => {
      if (!OutputView.isFirstPosition(item)) updatedMapPrint = OutputView.drawMapDivider(updatedMapPrint);
      updatedMapPrint = OutputView.drawMapMoveIcon(updatedMapPrint, item);
    });

    return updatedMapPrint;
  },

  drawMapDivider(mapPrint) {
    return {
      upPrint: mapPrint.upPrint + MAP.DIVIDER,
      downPrint: mapPrint.downPrint + MAP.DIVIDER,
    };
  },

  isFirstPosition(historyItem) {
    return !(historyItem.position > 0);
  },

  drawMapMoveIcon(mapPrint, historyItem) {
    if (historyItem.upOrDown === COMMAND.MOVE.UP) {
      return {
        upPrint: mapPrint.upPrint + MAP.MOVE_RESULT_ICON(historyItem.isSuccess),
        downPrint: mapPrint.downPrint + MAP.BLANK,
      };
    }
    return {
      upPrint: mapPrint.upPrint + MAP.BLANK,
      downPrint: mapPrint.downPrint + MAP.MOVE_RESULT_ICON(historyItem.isSuccess),
    };
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(history, tryCount) {
    OutputView.printFinalGameResult();
    OutputView.printMap(history);
    OutputView.printGameSuccessOrNot(history);
    OutputView.printAttemptsNumber(tryCount);
  },

  printGameStartMessage() {
    OutputView.print(MESSAGE.OUTPUT.GAME_START);
    OutputView.printBlank();
  },

  printFinalGameResult() {
    OutputView.print(MESSAGE.OUTPUT.FINAL_GAME_RESULT);
  },

  printGameSuccessOrNot(history) {
    OutputView.print(MESSAGE.OUTPUT.GAME_SUCCESS_OR_NOT(OutputView.getIsSuccess(history)));
  },

  printAttemptsNumber(tryCount) {
    OutputView.print(MESSAGE.OUTPUT.ATTEMPTS_NUMBER(tryCount));
    OutputView.close();
  },

  getIsSuccess(history) {
    return history[history.length - 1].isSuccess;
  },
};

module.exports = OutputView;
