import Highcharts from 'ember-highcharts/components/high-charts';

export default Highcharts.extend({
  chartMode: 'Map', // empty, 'StockChart', or 'Map'
  // chartOptions: {},
  chartData: Highcharts.geojson(Highcharts.maps['countries/us/custom/us-small'], 'mapline'),
  // theme: {}
});
