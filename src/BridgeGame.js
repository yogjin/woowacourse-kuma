/**
 * 다리 건너기 게임을 관리하는 클래스
 */
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
    this.process1();
  }

  process1() {
    printGameStartMessage();
    this.process2();
  }

  process2() {
    readBridgeSize(this.setBridge.bind(this), this.process3.bind(this));
  }

  process3() {
    readMoving(this.move.bind(this), this.process4.bind(this));
  }

  process4() {
    printMap(this.#history);
    if (!this.#history[this.#history.length - 1].isSuccess) {
      // 게임 재시작/종료 여부를 입력 받는다
      readGameCommand(this.retry.bind(this), this.quit.bind(this));
    } else if (this.#next === this.#bridge.length) {
      this.process5();
    } else {
      this.process3();
    }
  }

  // 게임 종료
  process5() {
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
    this.process3();
  }

  quit() {
    this.process5();
  }

  setBridge(bridge) {
    this.#bridge = bridge;
  }
}

module.exports = BridgeGame;
