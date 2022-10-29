function problem5(money) {
  const answer = [];
  const monetaryUnits = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  monetaryUnits.forEach((unit) => {
    const quotient = Math.floor(money / unit);

    answer.push(quotient);
    money -= quotient * unit;
  });

  return answer;
}

module.exports = problem5;
