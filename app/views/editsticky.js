import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'views/editsticky',

  fade: function() {
    if(this.get('content.fresh')) {
      return 'faded';
    }
  }.property('content.fresh')
});
