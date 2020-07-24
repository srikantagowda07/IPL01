function SOver(deliveries) {

    let runsScored = deliveries.reduce((accumulator, item) => {
        let superOver = item.is_super_over;
        let Bowler_Name = item.bowler;
        let Runs = item.total_runs;
        if (superOver == 1) {
            if (accumulator[Bowler_Name]) {
                accumulator[Bowler_Name] += (Runs * 1);
            } else {
                accumulator[Bowler_Name] = Runs * 1;
            }
        }
        return accumulator;
    }, {});

    let Over = deliveries.reduce((accumulator, item) => {
        let superOver = item.is_super_over;
        let Bowler_Name = item.bowler;
        if (superOver == 1) {
            if (accumulator[Bowler_Name]) {
                accumulator[Bowler_Name] += 1;
            } else {
                accumulator[Bowler_Name] = 1;
            }
        }
        return accumulator;
    }, {});

    const array = Object.entries(runsScored);

    let result = array.map((item) => {
        return [item[0], item[1] / (Over[item[0]] / 6)];
    });

    result.sort(function (a, b) {
        return a[1] - b[1];
    });
   
    return result[0];

}

module.exports = SOver;