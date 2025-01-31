anychart.onDocumentReady(function() {
    // load data
    anychart.data.loadJsonFile("allBubble.json",
    function (data) {
      // create a bubble chart 
      chart = anychart.bubble();
      // set the minimum and maximum bubble sizes
      chart.minBubbleSize("2%");
      chart.maxBubbleSize("10%");

      //set the background color to black
      chart.background().fill("black");
      //customize text colors to white
      chart.title().fontColor("white");
      chart.legend().fontColor("white");

      // name the axes
      chart.xAxis().title("GDP per capita");
      chart.yAxis().title("Life expectancy");
      // set the intervals between the ticks
      var xScale = anychart.scales.log();
      xScale.minimum(500).maximum(128000);
      xScale.ticks([500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 128000]);
      chart.xScale(xScale);

      //chart.yScale().ticks().interval(30);
      chart.yScale().minimum(30).maximum(120);
      chart.yScale().ticks().interval(30);
      // enable the grid
      chart.yGrid(true).xGrid(true).xMinorGrid(true).yMinorGrid(true);
      chart.xGrid().stroke("white 0.3");
      chart.yGrid().stroke("white 0.3");
      // separate the data into different series based on genre
      var asia = data.filter(function(entry) {
        return entry.genre === "Asia";
      });
      var europe= data.filter(function(entry) {
        return entry.genre === "Europe";
      });
      var africa = data.filter(function(entry) {
        return entry.genre === "Africa";
      });
      var theamericas = data.filter(function(entry) {
        return entry.genre === "The Americas";
      });

      // customize the appearance of each series

      // series 1
      var series1 = chart.bubble(asia).name("Asia");
      series1.normal().fill("rgb(245,80,100)", 0.9);
      series1.hovered().fill("rgb(245,80,100)", 0.7);
      series1.selected().fill("rgb(245,80,100)", 0.9);
      series1.normal().stroke("black", 1);
      series1.hovered().stroke("white", 2);
      series1.selected().stroke("white", 4);

      // series 2
      var series2 = chart.bubble(europe).name("Europe");
      series2.normal().fill("rgb(251,232,77)", 0.8);
      series2.hovered().fill("rgb(251,232,77)", 0.8);
      series2.selected().fill("rgb(251,232,77)", 0.8);
      series2.normal().stroke("black", 1);
      series2.hovered().stroke("white", 2);
      series2.selected().stroke("white", 4);

      // series 3
      var series3 = chart.bubble(africa).name("Africa");
      series3.normal().fill("rgb(96,210,230)", 0.5);
      series3.hovered().fill("rgb(96,210,230)", 0.3);
      series3.selected().fill("rgb(96,210,230)", 0.3);
      series3.normal().stroke("black", 1);
      series3.hovered().stroke("white", 2);
      series3.selected().stroke("white", 2);
      // series 4
      var series4 = chart.bubble(theamericas).name("The Americas");
      series4.normal().fill("rgb(154,232,71)", 0.85);
      series4.hovered().fill("rgb(154,232,71)", 0.9);
      series4.selected().fill("rgb(154,232,71)", 0.98);
      series4.normal().stroke("black", 1);
      series4.hovered().stroke("white", 2);
      series4.selected().stroke("white", 4);

      // prevent the bubbles from clipping
      series1.clip(false);
      series2.clip(false);
      series3.clip(false);
      series4.clip(false);
      // add the legend  
      chart.legend(true).padding({bottom: 12 , top: 12, right: 25});
      // configure the tooltip
      var tooltip = chart.tooltip();
      tooltip.titleFormat("Title: {%title}");
      tooltip.format("GDP per capita: {%x} \nLife expectancy: {%value} \nPopulation: {%size}");
      tooltip.fontColor("white");
      tooltip.background().fill("black");
      // add a chart title
      //chart.title("Top 30 Most Liked YouTube Videos");
      // set the container
      chart.container("container");
      // initiate the chart drawing
      chart.draw();
    })
  });