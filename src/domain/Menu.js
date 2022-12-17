const { Random } = require('@woowacourse/mission-utils');

const isDuplicatedThird = (categories, _category) => categories.filter((category) => category === _category).length >= 2;

class Menu {
  #foodList;
  #categories = [];

  constructor(foodList) {
    this.#foodList = foodList;
  }

  #getCategory(number) {
    return Object.keys(this.#foodList)[number - 1];
  }

  #setCategories() {
    let category = this.#getCategory(Random.pickNumberInRange(1, 5));
    while (!isDuplicatedThird(category)) category = this.#getCategory(Random.pickNumberInRange(1, 5));
    this.#categories.push(category);
  }

  #getMenus(category) {
    return this.#foodList[category].split(',').map((food) => food.trim());
  }

  recommendFood(unlikeMenus) {
    this.#setCategories();
    const menu = Random.shuffle(this.#getMenus(category))[0];
    if (unlikeMenus.includes(menu)) return this.recommendFood(unlikeMenus);
    return menu;
  }
  // { '포비': [ '우동', '스시' ], '제임스': [ '초코', '가츠동' ] }
  recommendFoods(unlikeMenus) {
    unlikeMenus.forEach((coach, menus) => {});
  }
}

module.exports = Menu;
