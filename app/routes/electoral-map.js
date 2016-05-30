import Ember from 'ember';
var API_SERVER = 'elections.huffingtonpost.com';
var API_BASE = '/pollster/api';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  charts(params, callback) {
    this.invoke('charts', params, function(resp){
      callback(resp);
    });
  },
  chart(slug, callback) {
    this.get('invoke')('charts/' + slug, {}, function(resp){
      callback(resp);
    });
  },
  polls(params, callback) {
    this.invoke('polls', params, function(resp){
      callback(resp);
    });
  },
  buildRequestUrl(path) {
    var url = 'http://' + API_SERVER + API_BASE + '/' + path;

    return url;
  },
  invoke(path, params, callback) {
    var url = this.buildRequestUrl(path);

    this.get('ajax').request(url, {qs: params}, function (error, response, body) {
      callback(JSON.parse(body));
    });
  },
  model() {
    debugger;
    this.get('chart')('2012-general-election-romney-vs-obama', function () {
      debugger;
    });
  }
});

