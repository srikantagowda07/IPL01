function strike_Rate(deliveries, matches) {
    var results = {};
    var matchCSV = matches;
    var Balls = {};
    var answer = {};
   
    for (let del of deliveries) {
        const player_Name = del.batsman;
        const Runs_scored = del.total_runs;
        const match_ID = del.match_id;
        const season = finding_year(matchCSV);
        function finding_year(matches) {
            for (let match of matches) {
                var id = match.id;
                if (match_ID == id) {
                    return match.season;
                }
            }
        }

        if (results[season]) {
            if (results[season][player_Name]) {
                results[season][player_Name] += (Runs_scored * 1);
            } else {
                results[season][player_Name] = (Runs_scored * 1);
            }
        } else {
            results[season] = {}
        }
        if (Balls[season]) {
            if (Balls[season][player_Name]) {
                Balls[season][player_Name] += 1;
            } else {
                Balls[season][player_Name] = 1;
            }
        } else {
            Balls[season] = {}
        }
    } 
    for (year in results) {
        answer[year] = {}
        for (key in results[year]) {
            answer[year][key] = (results[year][key] / Balls[year][key]) * 100;
        }
    }
    return answer;
}
module.exports = strike_Rate;

