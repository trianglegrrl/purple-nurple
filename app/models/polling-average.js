import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

var PollingAverage = Model.extend({
  estimates: attr('array'),
  pollCount: attr('number'),
  state: attr('string'),

  estimates: hasMany('estimate')
});

PollingAverage.reopenClass({

});
