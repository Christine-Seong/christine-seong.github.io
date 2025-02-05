anychart.onDocumentReady(function () {

    // create a data set on our data
    var dataSet = anychart.data.set(getData());
  
    // map data for the first series,
    // take x from the zero column and value from the first column
    var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
  
    // map data for the second series,
    // take x from the zero column and value from the second column
    var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });
  
    // map data for the third series,
    // take x from the zero column and value from the third column
    var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });
  
    // map data for the fourth series,
    // take x from the zero column and value from the fourth column
    var fourthSeriesData = dataSet.mapAs({ x: 0, value: 4 });
  
    // create a line chart
    var chart = anychart.line();
    chart.background().fill("black");
    //customize text colors to white
    chart.title().fontColor("white");
    chart.legend().fontColor("white");
    // turn on the line chart animation
    chart.animation(true);
  
    // configure the chart title text settings
    chart.title('CO₂ emissions per capita Consumption based, tonnes per capita');
  
    // set the y axis title
    chart.yAxis().title('CO₂ emissions(tonnes per capita) per capita');
  
    // turn on the crosshair
     chart.crosshair().enabled(true).yLabel(false).yStroke(null);
  
    // create the first series with the mapped data
    var firstSeries = chart.line(firstSeriesData);
    firstSeries
      .name('South Korea')
      .stroke('3 rgb(245,80,100)')
      .tooltip()
      .format('South Korea : {%value}%');
  
    // create the second series with the mapped data
    var secondSeries = chart.line(secondSeriesData);
    secondSeries
      .name('Netherlands')
      .stroke('3 rgb(251,232,77)')
      .tooltip()
      .format('Netherlands : {%value}%');
  
    // create the third series with the mapped data
    var thirdSeries = chart.line(thirdSeriesData);
    thirdSeries
      .name('South Africa')
      .stroke('3 rgb(96,210,230)')
      .tooltip()
      .format('South Africa : {%value}%');
  
    // create the fourth series with the mapped data
    var fourthSeries = chart.line(fourthSeriesData);
    fourthSeries
      .name('USA')
      .stroke('3 rgb(154,232,71)')
      .tooltip()
      .format('USA : {%value}%');
  
    // turn the legend on
    chart.legend().enabled(true);
  
    // set the container id for the line chart
    chart.container('container');
  
    // draw the line chart
    chart.draw();
  
  });
  
  function getData() {
    return [
      ['1940',0,3.79,3.7,13.5],
      ['1941',0,4.16,3.88,14.6],
      ['1942',0,3.83,4.16,15.5],
      ['1943',0,3.81,4.11,15.8],
      ['1944',0,2.51,4.51,16.7],
      ['1945',0,1.56,4.53,15.9],
      ['1946',0.028,3.27,4.46,15],
      ['1947',0.051,4.62,4.36,16.3],
      ['1948',0.092,4.83,4.37,16.7],
      ['1949',0.116,5.1,4.55,13.8],
      ['1950',0.114,5.11,4.48,16],
      ['1951',0.15,5.41,4.68,16.3],
      ['1952',0.175,5.32,4.99,15.6],
      ['1953',0.231,5.3,4.89,15.7],
      ['1954',0.247,5.53,4.97,14.7],
      ['1955',0.3,5.7,5.46,15.9],
      ['1956',0.34,6,5.61,16.3],
      ['1957',0.358,5.86,5.64,15.9],
      ['1958',0.379,5.99,5.91,15.2],
      ['1959',0.457,5.95,5.67,15.4],
      ['1960',0.495,6.42,5.73,15.5],
      ['1961',0.554,6.54,5.83,15.2],
      ['1962',0.644,7.08,5.88,15.5],
      ['1963',0.767,7.65,5.96,16],
      ['1964',0.788,8.02,6.32,16.5],
      ['1965',0.867,8.22,6.59,17],
      ['1966',1.02,8.39,6.41,17.7],
      ['1967',1.17,8.58,6.48,18.2],
      ['1968',1.22,9.07,6.45,18.7],
      ['1969',1.38,9.25,6.42,19.5],
      ['1970',1.73,11.4,6.39,20.8],
      ['1971',1.87,11.4,6.78,20.9],
      ['1972',1.93,12.9,6.45,21.8],
      ['1973',2.35,13.8,6.02,22.7],
      ['1974',2.45,13.6,5.59,21.9],
      ['1975',2.68,13.3,5.3,21],
      ['1976',3.09,15.1,4.97,21.9],
      ['1977',3.54,15,4.64,22.5],
      ['1978',3.81,15.8,4.25,23.1],
      ['1979',4.48,17.6,4.25,23.1],
      ['1980',4.51,16.6,4.2,22.1],
      ['1981',4.6,15.4,4.61,21],
      ['1982',4.7,14.2,5.05,20],
      ['1983',4.71,11.5,5.36,18.8],
      ['1984',4.93,11.8,5.43,18.8],
      ['1985',5.29,12.3,5.71,19.2],
      ['1986',5.68,12.5,5.71,19],
      ['1987',5.75,12.2,5.69,18.9],
      ['1988',6.01,12.7,5.52,19.5],
      ['1989',6.86,12.1,5.63,20.2],
      ['1990',7.22,13.4,5.46,20.2],
      ['1991',7.64,13.8,5.79,19.6],
      ['1992',8.79,15.6,5.31,20.1],
      ['1993',8.93,14.3,5.39,20],
      ['1994',9.36,13.9,5.69,20.1],
      ['1995',9.88,14.1,5.88,20.1],
      ['1996',10.7,13.8,5.63,20.5],
      ['1997',10.8,13.4,5.86,20.6],
      ['1998',7.74,13.6,5.58,20.9],
      ['1999',9.27,9.17,6.06,21.3],
      ['2000',10.3,8.1,5.84,22],
      ['2001',10.2,7.9,5.49,21.5],
      ['2002',11,8.15,5.06,21.7],
      ['2003',11.3,11.3,5.51,22.2],
      ['2004',11.5,11.7,6.34,22.4],
      ['2005',12.1,13.4,5.84,22.5],
      ['2006',12.6,14.3,6.45,22.3],
      ['2007',13.1,12.1,6.5,21.9],
      ['2008',13.1,13.5,6.38,20.6],
      ['2009',11.8,11.7,6.47,18.6],
      ['2010',13.3,13.4,6.2,19.1],
      ['2011',13.6,12.6,6.07,18.4],
      ['2012',13.2,11.3,6.39,17.8],
      ['2013',13,11.2,6.2,17.9],
      ['2014',13.3,10.1,6.1,18],
      ['2015',13,9.94,5.76,17.8],
      ['2016',12.7,9.91,5.68,17.2],
      ['2017',13.3,9.78,5.55,17],
      ['2018',13.9,9.8,5.42,17.4],
      ['2019',13.6,9.58,5.68,16.9],
      ['2020',12.7,8.67,5.11,15.4],
      ['2021',13.3,8.86,5.08,16.1],
      ['2022',13.5,8.77,5.18,16.4],

    ];
  }