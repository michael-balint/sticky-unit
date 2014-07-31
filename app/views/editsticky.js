import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'li',
  templateName: 'views/editsticky',

  fade: function() {
    if(this.get('content.fresh')) {
      return 'faded';
    }
  }.property('content.fresh')
});
