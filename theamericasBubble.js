anychart.onDocumentReady(function() {
    // load data
    anychart.data.loadJsonFile("theamericasBubble.json",
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
      // Configure the yScale range and ticks
      chart.yScale().minimum(30).maximum(120);
      chart.yScale().ticks().interval(30);
      // enable the grid
      chart.yGrid(true).xGrid(true).xMinorGrid(true).yMinorGrid(true);
      chart.xGrid().stroke("white 0.3");
      chart.yGrid().stroke("white 0.3");
      // separate the data into different series based on genre
      var theamericas = data.filter(function(entry) {
        return entry.genre === "Shorts";
      });

      // series 2
      var series2 = chart.bubble(theamericas).name("The Americas");
      series2.normal().fill("rgb(154,232,71)", 0.8);
      series2.hovered().fill("rgb(154,232,71)", 0.8);
      series2.selected().fill("rgb(154,232,71)", 0.8);
      series2.normal().stroke("black", 1);
      series2.hovered().stroke("white", 2);
      series2.selected().stroke("white", 4);
      // prevent the bubbles from clipping
      series2.clip(false);

      // add the legend  
      chart.legend(true).padding({bottom: 12 , top: 12, right: 25});
      // configure the tooltip
      var tooltip = chart.tooltip();
      tooltip.titleFormat("Title: {%title}");
      tooltip.format("GDP per capita: {%x} \nLife expectancy: {%value} \nPopulation: {%size}");
      tooltip.fontColor("white");
      tooltip.background().fill("black");

      // set the container
      chart.container("container");
      // initiate the chart drawing
      chart.draw();
    })
  });