import Ember from 'ember';

export default Ember.View.extend({
  indexClass: function() {
    return "rotate-" + this.get('_parentView.contentIndex');
  }.property()
});
