import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  choice: attr('string'),
  value: attr('number'),
  leadConfidence: attr('number'),

  pollingAverage: belongsTo('pollingAverage')
});
