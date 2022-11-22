/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const { COMMAND, BRIDGE } = require('./utils/constants/game');
const MESSAGE = require('./utils/constants/message');
//  제공된 InputView 객체를 활용해 구현해야 한다.
//  InputView의 파일 경로는 변경할 수 있다.
//  InputView의 메서드의 인자는 변경할 수 있다.
//  사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  // depth 3 인상태
  readBridgeSize(setBridge, process3) {
    Console.readLine(MESSAGE.INPUT.BRIDGE_LENGTH, (input) => {
      try {
        const size = parseInt(input, 10);
        const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);

        if (!(size >= BRIDGE.LENGTH.MIN && size <= BRIDGE.LENGTH.MAX)) {
          throw new Error(MESSAGE.ERROR.BRIDGE_LENGTH_INPUT_IS_BETWEEN_THREE_AND_TWENTY);
        }
        setBridge(bridge);
        process3();
      } catch (error) {
        OutputView.print(error.message);
        InputView.readBridgeSize(setBridge, process3);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(move, process4) {
    Console.readLine(MESSAGE.INPUT.SELECT_DIRECTION, (upOrDown) => {
      try {
        if (![COMMAND.MOVE.UP, COMMAND.MOVE.DOWN].includes(upOrDown)) throw new Error(MESSAGE.ERROR.MOVING_DIRECTION_INPUT_IS_U_OR_D);
        move(upOrDown);
        process4();
      } catch (error) {
        OutputView.print(error.message);
        InputView.readMoving(move, process4);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(retry, quit) {
    Console.readLine(MESSAGE.INPUT.RETRY_OR_QUIT, (restartOrQuit) => {
      try {
        if (![COMMAND.RETRY, COMMAND.QUIT].includes(restartOrQuit)) throw new Error(MESSAGE.ERROR.RETRY_INPUT_IS_R_OR_Q);
        if (restartOrQuit === COMMAND.RETRY) {
          retry();
        } else {
          quit();
        }
      } catch (error) {
        OutputView.print(error.message);
        InputView.readGameCommand(retry, quit);
      }
    });
  },
};

module.exports = InputView;
