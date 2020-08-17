function strikeRATEofplayer(deliveries, matches) {
    const match = Object.entries(matches);

    let Runs_Scored = deliveries.reduce((accumulator, item) => {
        const player_Name = item.batsman;
        const Runs_scored = item.total_runs;
        const match_ID = item.match_id;
        const found = match.find(element => (element[1].id == match_ID));
        const season = found[1].season;
        if (accumulator[season]) {
            if (accumulator[season][player_Name]) {
                accumulator[season][player_Name] += (Runs_scored * 1);
            } else {
                accumulator[season][player_Name] = (Runs_scored * 1);
            }
        } else {
            accumulator[season] = {}
        }
        return accumulator;
    }, {});

    let Ball = deliveries.reduce((accumulator, item) => {
        const player_Name = item.batsman;
        const match_ID = item.match_id;
        const found = match.find(element => (element[1].id == match_ID));
        const season = found[1].season;
        if (accumulator[season]) {
            if (accumulator[season][player_Name]) {
                accumulator[season][player_Name] += 1;
            } else {
                accumulator[season][player_Name] = 1;
            }
        } else {
            accumulator[season] = {}
        }
        return accumulator;
    }, {});

    const array = Object.entries(Runs_Scored);

    function myfunction(element, season) {
        let obj = {}
        let year = season;
        for (key in element) {
            obj[key] = (element[key] / Ball[year][key]) * 100;
        }
        
        return obj;
    }

    const result = array.map((ele) => { return [ele[0], myfunction(ele[1], ele[0])]; });

    return result;

}

module.exports = strikeRATEofplayer;
