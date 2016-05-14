import Ember from 'ember';
import Highcharts from 'ember-highcharts/components/high-charts';

export default Ember.Component.extend({
  chartMode: 'Map', // empty, 'StockChart', or 'Map'
  chartData: Highcharts.geojson(Highcharts.maps['countries/us/custom/us-small'], 'mapline'),
});
