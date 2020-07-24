function man_of_The_Match(matches) {

    let results = matches.reduce((accumulator, item) => {
        const winner = item.player_of_match;
        var season = item.season;
        if (accumulator[season]) {
            if (accumulator[season][winner]) {
                accumulator[season][winner] += 1;
            } else {
                accumulator[season][winner] = 1
            }
        } else {
            accumulator[season] = {}
        }
        return accumulator;
    }, {});
    var answer = {};
    const array = Object.entries(results);
    array.forEach(myFunction);
    function myFunction(item) {
        let player_Name_Array = Object.entries(item[1]);
        player_Name_Array.sort(function (a, b) { return b[1] - a[1] });
        answer[item[0]] = player_Name_Array[0][0];
    }

    return answer;

}


module.exports = man_of_The_Match;