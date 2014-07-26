import Ember from 'ember';

var Router = Ember.Router.extend({
  location: StickyUnitENV.locationType
});

Router.map(function() {
  this.route('goals-knowledgeskill');
});

export default Router;
