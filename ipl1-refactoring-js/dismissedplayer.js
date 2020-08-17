function dismissedplayer(deliveries) {
    let result = deliveries.reduce((accumulator, item) => {
        const batsman = item.player_dismissed;
        var bowler = item.bowler;

        if (batsman != '') {

            if (accumulator[batsman]) {
                if (accumulator[batsman][bowler]) {
                    accumulator[batsman][bowler] += 1;
                } else {
                    accumulator[batsman][bowler] = 1
                }
            } else {
                accumulator[batsman] = {}
            }

        }

        return accumulator;

    }, {});

    return result;
}

module.exports = dismissedplayer