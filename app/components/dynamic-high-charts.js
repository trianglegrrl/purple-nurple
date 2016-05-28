import Ember from 'ember';
import EmberHighChartsComponent from 'ember-highcharts/components/high-charts';

export default EmberHighChartsComponent.extend({
  contentDidChange: Ember.observer('content.@each.isLoaded', function() {
    var chart = this.get('chart');
    var seriesName = this.get('content')[0].name;

    chart.series[0].update({ name: seriesName, data: this.get('content')[0].data }, false);
    chart.setTitle(null, { text: seriesName }, false);
    chart.redraw();
  })
});
