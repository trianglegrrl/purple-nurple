import Ember from 'ember';

export default Ember.Controller.extend({
  chartMode: 'Chart',

  chartOptions: {
    chart: {
      type: 'scatter',
      zoomType: 'xy'
    },
    title: {
      text: 'Political Compass Ratings of Political Candidates'
    },
    subtitle: {
      text: 'Source: https://www.politicalcompass.org'
    },
    xAxis: {
      plotLines: [{
        color: 'black', // Color value
        value: 0, // Value of where the line will appear
        width: 2 // Width of the line
      }],
      title: {
        enabled: true,
        text: 'Left/Right'
      },
      gridLineWidth: 1,
      tickInterval: 1,
      min: -10,
      max: 10,
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    yAxis: {
      plotLines: [{
        color: 'black', // Color value
        value: 0, // Value of where the line will appear
        width: 2 // Width of the line
      }],
      title: {
        text: 'Libertarian/Authoritarian'
      },
      gridLineWidth: 1,
      tickInterval: 1,
      min: -10,
      max: 10,
    },
    legend:{
      layout: 'horizontal',
      align: 'left',
      width: 300,
      itemWidth:150,
      itemStyle: {
        "lineHeight": "1.5em"
      },
      verticalAlign: 'top',
      x: 70,
      y:60,
      floating: true,
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderRadius: 3,
    },
  },

  plotOptions: {
    scatter: {
      marker: {
        radius: 7,
        states: {
          hover: {
            enabled: true,
            lineColor: 'rgb(100,100,100)'
          }
        }
      },
      states: {
        hover: {
          marker: {
            enabled: false
          }
        }
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x} Left/right, {point.y} Authoritarian/Libertarian'
      }
    }
  },

  series: [{
    name: 'Cdn Lib (2015)',
    color: 'rgba(255, 0, 0, 0.5)',
    data: [[2, 4]]

  }, {
    name: 'Cdn Con (2015)',
    color: 'rgba(119, 152, 191, 0.5)',
    data: [[8.5,7]]
  }, {
    name: 'Cdn NDP (2015)',
    color: 'rgba(255, 102, 0, 0.5)',
    data: [[-0.3, -1.5]]
  }, {
    name: 'Alaina (2016)',
    color: 'rgba(255, 105, 180, 1)',
    data: [[-5.38, -7.23]]
  }, {
    name: 'Krista (2016)',
    color: 'rgba(148,0,211, 1)',
    data: [[-6.5, -6.77]]
  }, {
    name: 'Cynthia (2016)',
    color: 'rgba(34,139,34, 1)',
    data: [[-4.2, -6.5]]
  }, {
    name: 'Trump (2016)',
    color: 'rgba(119, 152, 191, 1)',
    data: [[8,9]]
  }, {
    name: 'Nader (2008)',
    color: 'rgba(0, 191, 0, 1)',
    data: [[-4.75,-2.9]]
  }, {
    name: 'Obama (2008)',
    color: 'rgba(0, 0, 191, 1)',
    data: [[2.8,2]]
  }, {
    name: 'Obama (2012)',
    color: 'rgba(0, 0, 191, 1)',
    data: [[6,6]]
  }, {
    name: 'Romney (2012)',
    color: 'rgba(220,20,60, 1)',
    data: [[6.5,7]]
  }, {
    name: 'Clinton (2008)',
    color: 'rgba(30,144,255, 1)',
    data: [[4,2]]
  }, {
    name: 'Clinton (2016)',
    color: 'rgba(30,144,255, 1)',
    data: [[7,4]]
  }, {
    name: 'Sanders (2016)',
    color: '  rgba(0,191,255,1)',
    data: [[-2, 0]]
  }]
});
