import Ember from 'ember';

const { computed, Controller } = Ember;

export default Controller.extend({
  chartMode: 'Chart',

  filteredSeries: computed.filterBy('model', 'display', true),

  chartData: computed('filteredSeries.@each.display', function () {
    let series = this.get('filteredSeries');

    return series.map(function(item) {
      return {
        name: item.get('name'),
        color: item.get('color'),
        data: item.get('values'),
      };
    });
  }),

  chartOptions: {
    chart: {
			type: 'scatter',
			zoomType: 'xy',
			marginRight: 180
    },
    title: {
      text: 'Political Compass Ratings'
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
      itemWidth:150,
      itemStyle: {
        "lineHeight": "1.5em"
      },
      verticalAlign: 'top',
			floating: true,
			x: 30,
			y: 30,
			title: {
				text: 'Click to toggle',
				marginBottom: '0.5em'
			},
			align: 'right',
			layout: 'vertical',
			draggable: true,
			backgroundColor: '#ffffff',
      borderRadius: 3,
    },
    plotOptions: {
      series: {
        animation: {
          duration: 2000,
        }
      },
      scatter: {
        dataLabels: {
          enabled: true,
          allowOverlap: true,
          format: "{series.name}"
        },
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
  },
});
