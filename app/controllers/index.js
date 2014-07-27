import Ember from 'ember';

export default Ember.Controller.extend({
  unit: function() {
    return this.store.find("unit", "main-unit");
  }.property()
});
