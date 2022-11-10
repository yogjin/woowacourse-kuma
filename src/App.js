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

      Utils.readLine(`당첨 번호를 입력해 주세요.`, (input) => {
        const lottoWinningNumbers = input.split(',').map((number) => {
          const lottoNumber = parseInt(number, 10);
          if (!(lottoNumber >= 1 && lottoNumber <= 45)) throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');

          return lottoNumber;
        });

        Utils.readLine(`보너스 번호를 입력해 주세요.`, (input) => {
          const bonusNumber = parseInt(input, 10);
          if (!(bonusNumber >= 1 && bonusNumber <= 45)) throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
        });
      });
    });
  }
}

module.exports = App;
