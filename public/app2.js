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