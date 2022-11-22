const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class Bridge {
  #bridge;

  constructor() {
    this.#bridge = [];
  }

  make(size) {
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#bridge = bridge;
  }

  isLastPosition(next) {
    return this.#bridge.length === next;
  }

  canCross(upOrDown, next) {
    return this.#bridge[next] === upOrDown;
  }
}

module.exports = Bridge;
