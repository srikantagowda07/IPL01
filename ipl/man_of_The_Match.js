function man_of_The_Match(matches) {
  var results = {};
  for (let match of matches) {
    const winner = match.player_of_match;
    var season = match.season;
    if (results[season]) {
      if (results[season][winner]) {
        results[season][winner] += 1;
      } else {
        results[season][winner] = 1
      }
    } else {
      results[season] = {}
    }
  }
  var answer = {};
  for (var year in results) {
    var array = Object.entries(results[year]);
    array.sort(function (a, b) {
      return b[1] - a[1];
    });
    answer[year] = array[0][0];
  }
  return (answer);
}
module.exports = man_of_The_Match;


