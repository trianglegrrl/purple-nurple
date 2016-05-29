import Ember from 'ember';

let  mapData = Highcharts.geojson(Highcharts.maps['countries/us/us-all-all']);

export default Ember.Controller.extend({
  chartMode: 'Map',

  chartOptions: {
    title: {
      text: 'Electoral Map 2012'
    },

    subtitle: {
      text: ''
    },

    mapNavigation: {
      enabled: true,
      enableButtons: false
    },

    xAxis: {
      labels: {
        enabled: false
      }
    },

    colorAxis: {},

    series: [{
      mapData: mapData,
      //data: this.get('model'),
      name: 'Unemployment rate per 2015',
      states: {
        hover: {
          color: '#BADA55'
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function () {
          return this.point.properties['hc-a2'];
        },
        style: {
          fontSize: '10px'
        }
      },
      tooltip: {
        valueSuffix: '%'
      }
    }, {
      type: 'mapline',
      data: Highcharts.geojson(Highcharts.maps['countries/us/custom/us-small'], 'mapline'),
      color: 'silver'
    }]
  }
});
