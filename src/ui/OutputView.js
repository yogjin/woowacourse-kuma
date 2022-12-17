const { Console } = require('@woowacourse/mission-utils');

const print = (text) => {
  Console.print(text);
};

const printBlank = () => {
  Console.print('');
};

const closeConsole = () => {
  Console.close();
};

const printCategories = (categories) => {
  print(`[ 카테고리 | ${categories[0]} | ${categories[1]} | ${categories[2]} | ${categories[3]} | ${categories[4]} ]`);
};

const printRecommendations = (recommendationResult) => {
  for (const [coach, menus] of Object.entries(recommendationResult)) {
    print(`[ ${coach} | ${menus[0]} | ${menus[1]} | ${menus[2]} | ${menus[3]} | ${menus[4]} ]`);
  }
};

const OutputView = {
  print(text) {
    print(text);
  },

  printStartMenuRecommadationMessage() {
    print(`점심 메뉴 추천을 시작합니다.`);
    printBlank();
  },

  printMenuRecommendationResult(categories, recommendationResult) {
    printBlank();
    print(`메뉴 추천 결과입니다.`);
    printBlank();
    print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
    printCategories(categories);
    printRecommendations(recommendationResult);
    printBlank();
    print(`추천을 완료했습니다.`);
    closeConsole();
  },
};

module.exports = OutputView;
