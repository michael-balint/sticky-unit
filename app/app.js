import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'sticky-unit', // TODO: loaded via config
  Resolver: Resolver
});

App.ApplicationAdapter = DS.FixtureAdapter({});

loadInitializers(App, 'sticky-unit');

export default App;
