/**
 * 다리 건너기 게임을 관리하는 클래스
 */
//  제공된 BridgeGame 클래스를 활용해 구현해야 한다.
//  BridgeGame에 필드(인스턴스 변수)를 추가할 수 있다.
//  BridgeGame의 파일 경로는 변경할 수 있다.
//  BridgeGame의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
//  게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.
// BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.
const { printGameStartMessage, printMap, printResult } = require('./OutputView');
const { readBridgeSize, readMoving, readGameCommand } = require('./InputView');

class BridgeGame {
  #bridge;
  #next;
  #history;
  #tryCount;

  constructor() {
    this.#next = 0;
    this.#history = [];
    this.#tryCount = 1;
  }

  start() {
    this.gameStartProcess();
  }

  gameStartProcess() {
    printGameStartMessage();
    this.setBridgeProcess();
  }

  setBridgeProcess() {
    readBridgeSize(this.setBridge.bind(this), this.moveProcess.bind(this));
  }

  moveProcess() {
    readMoving(this.move.bind(this), this.retryOrQuitProcess.bind(this));
  }

  retryOrQuitProcess() {
    printMap(this.#history);
    if (!this.#history[this.#history.length - 1].isSuccess) {
      // 게임 재시작/종료 여부를 입력 받는다
      readGameCommand(this.retry.bind(this), this.quit.bind(this));
    } else if (this.#next === this.#bridge.length) {
      this.gameTerminateProcess();
    } else {
      this.moveProcess();
    }
  }

  // 게임 종료
  gameTerminateProcess() {
    printResult(this.#history, this.#tryCount);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(upOrDown) {
    const isSuccess = upOrDown === this.#bridge[this.#next];
    this.#history.push({ position: this.#next, upOrDown, isSuccess });
    this.#next += 1;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#next = 0;
    this.#history = [];
    this.#tryCount += 1;
    this.moveProcess();
  }

  quit() {
    this.gameTerminateProcess();
  }

  setBridge(bridge) {
    this.#bridge = bridge;
  }
}

module.exports = BridgeGame;
