const { MAP, COMMAND } = require('../utils/constants/game');

const isFirstPosition = (historyItem) => !(historyItem.position > 0);

class BridgeMap {
  #map;
  #history;

  constructor(history) {
    this.#map = {
      upPrint: '',
      downPrint: '',
    };
    this.#history = history;
  }

  getMap() {
    this.draw();
    return this.#map;
  }

  draw() {
    this.drawMapStart();
    this.drawMapMove();
    this.drawMapEnd();
  }

  drawMapStart() {
    this.#map = {
      upPrint: this.#map.upPrint + MAP.LEFT_BRACKET,
      downPrint: this.#map.downPrint + MAP.LEFT_BRACKET,
    };
  }

  drawMapEnd() {
    this.#map = {
      upPrint: this.#map.upPrint + MAP.RIGHT_BRACKET,
      downPrint: this.#map.downPrint + MAP.RIGHT_BRACKET,
    };
  }

  drawMapMoveIcon(historyItem) {
    if (historyItem.upOrDown === COMMAND.MOVE.UP) {
      this.#map = {
        upPrint: this.#map.upPrint + MAP.MOVE_RESULT_ICON(historyItem.isSuccess),
        downPrint: this.#map.downPrint + MAP.BLANK,
      };
    } else {
      this.#map = {
        upPrint: this.#map.upPrint + MAP.BLANK,
        downPrint: this.#map.downPrint + MAP.MOVE_RESULT_ICON(historyItem.isSuccess),
      };
    }
  }

  drawMapDivider() {
    this.#map = {
      upPrint: this.#map.upPrint + MAP.DIVIDER,
      downPrint: this.#map.downPrint + MAP.DIVIDER,
    };
  }

  drawMapMove() {
    this.#history.forEach((item) => {
      if (!isFirstPosition(item)) {
        this.drawMapDivider();
      }
      this.drawMapMoveIcon(item);
    });
  }
}

module.exports = { BridgeMap };
