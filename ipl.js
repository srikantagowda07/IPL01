const fs = require("fs");
const final = {};
const JSON_OUTPUT_FILE_PATH = "./public/datasql.json";

function todo(connection, sql, name_Variable) {

    connection.query(sql, [true], (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }

        final[name_Variable] = results;

        fs.writeFile(JSON_OUTPUT_FILE_PATH, JSON.stringify(final), "utf8", err => {
            if (err) {
                console.error(err)
            }
        })
    });
}

function myfunction(connection) {

    let sql1 = "SELECT toss_winner,Count(*) FROM matches1 GROUP BY toss_winner";
    todo(connection, sql1, "toss_winner") // Toss_MatchWinners;

    let sql2 = `with play as (select player_of_match, season, count(*) as times from matches1 group by player_of_match, season)select * from play a where a.times in (select max(times) from play b where b.season=a.season) order by 2;`
    todo(connection, sql2, "Man_of_the_match") // Man of the Match; 

    let sql3 = "select season,sum(batsman_runs)/count(batsman)*100 AS Strike_Rate from matches1 join deliveries on matches1.id=deliveries.match_id where batsman='V Kohli' GROUP BY season"
    todo(connection, sql3, "Strike_Rate")  // Strike Rate;

    let sql4 = "select bowler,COunt(*) from deliveries where player_dismissed='PP Ojha' group by bowler; "
    todo(connection, sql4, "dissmissed")  // Dissmissed Player PP Ojha;

    let sql5 = "SELECT bowler,SUM(total_runs)/(COUNT(bowler)/6) AS economy FROM deliveries where is_super_over!=0 GROUP BY bowler  ORDER BY economy ASC LIMIT 1";
    todo(connection, sql5, "Super_Over")  // Super Over Best Economic Blower;

}

module.exports.myfunction = myfunction;
