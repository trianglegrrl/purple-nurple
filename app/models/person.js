import Model from 'ember-data/model';
import attr from 'ember-data/attr';

var Person = Model.extend({
  name: attr('string'),
  color: attr('string'),
  values: attr('array'),
  display: attr('boolean'),
  roles: attr('array'),
});

Person.reopenClass({
  FIXTURES: [
  {
    id:1,
    name: 'Cdn Lib (2015)',
    color: 'rgba(255, 0, 0, 0.5)',
    values: [[2, 4]],
    display: true,
    role: 'canadian'
  }, {
    id:2,
    name: 'Cdn Con (2015)',
    color: 'rgba(119, 152, 191, 0.5)',
    values: [[8.5,7]],
    display: true,
    role: 'canadian'
  }, {
    id:3,
    name: 'Cdn NDP (2015)',
    color: 'rgba(255, 102, 0, 0.5)',
    values: [[-0.3, -1.5]],
    display: true,
    role: 'canadian'
  }, {
    id:4,
    name: 'Lachlan',
    color: 'rgba(255, 105, 0, 1)',
    values: [[-5.38, -6.1]],
    display: true,
    role: 'friends'
  }, {
    id:5,
    name: 'Alastair',
    color: 'rgba(255, 0, 180, 1)',
    values: [[-7.5, -7.59]],
    display: true,
    role: 'friends'
  }, {
    id:6,
    name: 'Alaina',
    color: 'rgba(255, 105, 180, 1)',
    values: [[-5.38, -7.23]],
    display: true,
    role: 'friends'
  }, {
    id:7,
    name: 'Krista',
    color: 'rgba(148,0,211, 1)',
    values: [[-6.5, -6.77]],
    display: true,
    role: 'friends'
  }, {
    id:8,
    name: 'Cynthia',
    color: 'rgba(34,139,34, 1)',
    values: [[-4.2, -6.5]],
    display: true,
    role: 'friends'
  }, {
    id:9,
    name: 'Trump (2016)',
    color: 'rgba(119, 152, 191, 1)',
    values: [[8,9]],
    display: true,
    role: 'republican'
  }, {
    id:10,
    name: 'Nader (2008)',
    color: 'rgba(0, 191, 0, 1)',
    values: [[-4.75,-2.9]],
    display: true,
    role: 'us'
  }, {
    id:11,
    name: 'Obama (2008)',
    color: 'rgba(0, 0, 191, 1)',
    values: [[2.8,2]],
    display: true,
    role: 'democrat'
  }, {
    id:12,
    name: 'Obama (2012)',
    color: 'rgba(0, 0, 191, 1)',
    values: [[6,6]],
    display: true,
    role: 'democrat'
  }, {
    id:13,
    name: 'Romney (2012)',
    color: 'rgba(220,20,60, 1)',
    values: [[6.5,7]],
    display: true,
    role: 'republican'
  }, {
    id:14,
    name: 'Clinton (2008)',
    color: 'rgba(30,144,255, 1)',
    values: [[4,2]],
    display: true,
    role: 'democrat'
  }, {
    id:15,
    name: 'Clinton (2016)',
    color: 'rgba(30,144,255, 1)',
    values: [[7,4]],
    display: true,
    role: 'democrat'
  }, {
    id:16,
    name: 'Sanders (2016)',
    color: '  rgba(0,191,255,1)',
    values: [[-2, 0]],
    display: true,
    role: 'democrat'
  }
  ]
});

export default Person;
