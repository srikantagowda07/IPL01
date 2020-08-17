const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const Extra_Runs = require("./ipl/Extra_Runs");
const winningTeamPerVenue = require("./ipl/winningTeamPerVenue");
const economicalBowler = require("./ipl/economicalBowler");
const mostManOfTheMatches = require("./ipl/mostManOfTheMatches");
const Match_Winners = require("./ipl/Match_Winners");
const mostWins = require("./ipl/mostWins");
const Toss_MatchWinners = require("./ipl/Toss_MatchWinners");
const man_of_The_Match = require("./ipl/man_of_The_Match");
const strike_Rate = require("./ipl/strike_Rate");
const best_Econ_Superover = require("./ipl/best_Econ_Superover");
const dismissed = require("./ipl/dismissed");
const toss = require("./ipl1-refactoring-js/toss");
const dismissedplayer = require("./ipl1-refactoring-js/dismissedplayer");
const manofthematch = require("./ipl1-refactoring-js/manofthematch");
const strikeRATEofplayer = require("./ipl1-refactoring-js/strikeRATEofplayer");
const SOver = require("./ipl1-refactoring-js/SOver");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data1.json";
const JSON_OUTPUT_FILE_PATH2 = "./public/data2.json";
const JSON_OUTPUT_FILE_PATH3 = "./public/data3.json";

var finalResult = {};
var finalResult2 = {};
var finalResult3 = {};

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          let result2 = Extra_Runs(deliveries, matches);
          finalResult['Extra_Runs'] = result2;

          let resulteconomicalBowler = economicalBowler(deliveries, matches);
          finalResult['economicalBowler'] = resulteconomicalBowler;

          let resultsToss_MatchWinners = Toss_MatchWinners(matches);
          finalResult2['Toss_MatchWinners'] = resultsToss_MatchWinners;

          let resultPlayedPerYear = matchesPlayedPerYear(matches);
          finalResult['matchesPlayedPerYear'] = resultPlayedPerYear;

          let resultPerVenue = winningTeamPerVenue(matches);
          finalResult['winningTeamPerVenue'] = resultPerVenue;

          let resultmostManOfTheMatches = mostManOfTheMatches(matches);
          finalResult['mostManOfTheMatches'] = resultmostManOfTheMatches;

          let resultMatch_Winners = Match_Winners(matches);
          finalResult['Match_Winners'] = resultMatch_Winners;

          let resultmostWins = mostWins(matches);
          finalResult['mostWins'] = resultmostWins;

          let reslultman_of_The_Match = man_of_The_Match(matches);
          finalResult2['man_of_The_Match'] = reslultman_of_The_Match;


          let resultstrike_Rate = strike_Rate(deliveries, matches);
          finalResult2['strike_Rate'] = resultstrike_Rate;

          let resultbest_Econ_Superover = best_Econ_Superover(deliveries);
          finalResult2['best_Econ_Superover'] = resultbest_Econ_Superover;

          let resultsdismissed = dismissed(deliveries);
          finalResult2['dismissed'] = resultsdismissed;

          let resultdismissedplayer = dismissedplayer(deliveries);
          finalResult3['dismissedplayer'] = resultdismissedplayer;

          let resultmanofthematch = manofthematch(matches);
          finalResult3['manofthematch'] = resultmanofthematch;


          let resultstrikeRATEofplayer = strikeRATEofplayer(deliveries, matches);
          finalResult3['strikeRATEofplayer'] = resultstrikeRATEofplayer;

          let resultSOver = SOver(deliveries);
          finalResult3['SOver'] = resultSOver;

          let tossresult = toss(matches);
          finalResult3['toss'] = tossresult;

          fs.writeFile(JSON_OUTPUT_FILE_PATH3, JSON.stringify(finalResult3), "utf8", err => {
            if (err) {
              console.error(err)
            }
          });

          fs.writeFile(JSON_OUTPUT_FILE_PATH2, JSON.stringify(finalResult2), "utf8", err => {
            if (err) {
              console.error(err)
            }
          });

          fs.writeFile(JSON_OUTPUT_FILE_PATH, JSON.stringify(finalResult), "utf8", err => {
            if (err) {
              console.error(err)
            }
          });
        })
    })
}

main();

var mysql = require('mysql');
var sqlIPL = require("./ipl");
require('./config.js');

let connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});


connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected Successfully!");
});


sqlIPL.myfunction(connection)


connection.end(function (err) {
  if (err) throw err;
  console.log("Connection End!");
});
//                                             END