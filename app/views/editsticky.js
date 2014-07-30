import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'span',
  templateName: 'views/editsticky',
  selectOptions: [],

  sticky: 'sticky',
  fade: function() {
    if(this.get('content.fresh')) {
      return 'faded';
    }
  }.property('content.fresh')
});
