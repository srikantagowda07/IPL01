function fetchAndVisualizeData2() {
    fetch("./data2.json")
      .then(r => r.json())
      .then(visualizeData2);
  }
  
  fetchAndVisualizeData2();
  
  function visualizeData2(data2) {
    visualizeToss_MatchWinners(data2.Toss_MatchWinners);
    visualstrike_Rate(data2.strike_Rate , data2.man_of_The_Match);
    visualizedismissed(data2.dismissed)
    visualman_of_The_Match(data2.man_of_The_Match);
    return;
  }
  
  
function visualizeToss_MatchWinners(Toss_MatchWinners) {
    const seriesData = [];
    for (let key in Toss_MatchWinners) {
      seriesData.push([key, Toss_MatchWinners[key]]);
    }
  
    Highcharts.chart("Toss_MatchWinners", {
      chart: {
        type: "column"
      },
      title: {
        text: "Toss Match Winners"
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
          name: "Years",
          data: seriesData
        }
      ]
    });
  }

  
function visualstrike_Rate(strike_Rate, man_of_The_Match) {
    const teams = Object.values(man_of_The_Match);
    const seasons=Object.keys(strike_Rate);
    let seriesData=[];
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