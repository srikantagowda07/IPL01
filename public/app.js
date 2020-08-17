function HighChart(seriesData, highchart_details) {  //commom highchart for 3 program;
  Highcharts.chart(highchart_details.title, {
    chart: {
      type: "column"
    },
    title: {
      text: highchart_details.text
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: highchart_details.name,
        data: seriesData
      }
    ]
  });
}
function fetchAndVisualizeData2() {
  fetch("./data2.json")
    .then(r => r.json())
    .then(visualizeData2);
}
fetchAndVisualizeData2();

function visualizeData2(data2) {
  visualizeToss_MatchWinners(data2.Toss_MatchWinners);
  visualstrike_Rate(data2.strike_Rate, data2.man_of_The_Match);
  visualman_of_The_Match(data2.man_of_The_Match);
  visualizedismissed(data2.dismissed)
  return;
}
function visualizeToss_MatchWinners(Toss_MatchWinners) {
  const highchart_details = { title: "Toss_MatchWinners", text: "Toss Winners In IPL", name: "Year" };
  const seriesData = Object.keys(Toss_MatchWinners).map(ele => [ele, Toss_MatchWinners[ele]])
  HighChart(seriesData, highchart_details)
}
function visualman_of_The_Match(man_of_The_Match) {
  const seriesData = Object.keys(man_of_The_Match).map(key => [man_of_The_Match[key], (key * 1)]);
  let highchart_details = { title: "manofTHE_Match", text: "Player of the match", name: "Year" };
  HighChart(seriesData, highchart_details);
}

function visualizedismissed(dismissed) {
  let key = Object.keys(dismissed);
  let player;
  key.forEach(ele => {
    if (ele == "PP Ojha") {
      player = dismissed[ele]
    }
  })
  const seriesData = Object.keys(player).map(ele => [ele, dismissed["PP Ojha"][ele]]);
  let highchart_details = { title: "dismissed", text: "Dismissed Player", name: "Year" };
  HighChart(seriesData, highchart_details);
}


//=============================================================================================
function visualstrike_Rate(strike_Rate, man_of_The_Match) {
  const teams = Object.values(man_of_The_Match);
  const seasons = Object.keys(strike_Rate);
  let seriesData = [];
  seriesData = teams.map(team => ({
    name: team,
    data: seasons.map(season => strike_Rate[season][team] || 0)
  }));

  Highcharts.chart("strike_Rate", {
    chart: {
      type: 'column'
    },
    title: {
      text: 'STRIKE RATE OF TOP MAN OF THE MATCH PLAYERS'
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      title: {
        text: "Teams"
      },
      categories: seasons,
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'strike_Rate'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: seriesData
  });
}