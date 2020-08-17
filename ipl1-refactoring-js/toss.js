function toss(matches) {
  let result = matches.reduce((accumulator, item) => {
    const toss_winner = item.toss_winner;
    const winner = item.winner;
    if (winner == toss_winner) {
      if (accumulator[winner]) {
        accumulator[winner] += 1;
      } else {
        accumulator[winner] = 1;
      }
    }

    return accumulator;

  }, {});

  return result;
}

module.exports = toss;
