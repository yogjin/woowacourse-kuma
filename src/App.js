const Company = require('./Company');
const Utils = require('./Utils');

class App {
  play() {
    const company = new Company();

    Utils.readLine(`구입금액을 입력해 주세요.`, (amount) => {
      if (amount % 1000 !== 0) throw new Error('[ERROR] 1,000원 단위로 입력해주세요.');

      company.generateLotto(amount);

      const generatedLottosCount = company.getGeneratedLottosCount();
      const generatedLottos = company.getGeneratedLottos();

      Utils.print(`${generatedLottosCount}개를 구매했습니다.`);
      generatedLottos.forEach((generatedLotto) => Utils.print(generatedLotto));
    });
  }
}

module.exports = App;
