function fetchAndVisualizeData123() {
  fetch("./sql.json")
    .then(r => r.json())
    .then(visualizeData123);
}
function visualizeData123(datasql) {
  visualizeTossesAndMatch(datasql.toss_winner)
  visualizeStrike_Rate(datasql.Strike_Rate)
  visualizedissmissed(datasql.dissmissed)
  visualizeMan_of_the_match(datasql.Man_of_the_match)
  return;
}
fetchAndVisualizeData123();

function VisualizingFunction(obj, data) {
  var visualizationArray = data.map(element => {
    return (Object.values(element));
  });
  Highcharts.chart(obj.container_Id, {
    chart: {
      type: "column"
    },
    title: {
      text: obj.text
    },
    xAxis: {
      title: {
        text: obj.x_text
      },
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: obj.y_text
      }
    },
    series: [
      {
        name: obj.series_name,
        data: visualizationArray
      }
    ]
  });
}

function visualizeTossesAndMatch(tossAndMatches) {
  var highchart_details = {container_Id: 'tossAndMatches', text: "Tosses And Matches Won by Each Team", x_text: "Teams", y_text: "Matches", series_name: "Matches"};
  VisualizingFunction(highchart_details, tossAndMatches)
}

function visualizeStrike_Rate(Strike_Rate) {
  var highchart_details = {container_Id: 'Strike_Rate',text: "Strike Rate of kholi",x_text: "Year",y_text: "Matches",series_name: "Matches"};
  VisualizingFunction(highchart_details, Strike_Rate)
}

function visualizedissmissed(dissmissed) {
  var highchart_details = {container_Id: 'dissmissed',text: "dissmissed players Name",x_text: "player Names",y_text: "Matches",series_name: "Matches"};
  VisualizingFunction(highchart_details, dissmissed)
}

function visualizeMan_of_the_match(Man_of_the_match) {
  var highchart_details = {container_Id: 'Man_of_the_match',text: "Man of the Match Each Players",x_text: "player names",y_text: "Matches",series_name: "Matches"};
  VisualizingFunction2(highchart_details, Man_of_the_match)
}

function VisualizingFunction2(obj, data) {
  var visualizationArray = data.map(element => {
    let a = Object.values(element)
    let result = [a[0], a[2]]

    return (result);
  });
  Highcharts.chart(obj.container_Id, {
    chart: {
      type: "column"
    },
    title: {
      text: obj.text
    },
    xAxis: {
      title: {
        text: obj.x_text
      },
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: obj.y_text
      }
    },
    series: [
      {
        name: obj.series_name,
        data: visualizationArray
      }
    ]
  });
}