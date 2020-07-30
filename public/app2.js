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
  