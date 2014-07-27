import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'views/editsticky',
  tagName: 'span',
  classNameBindings: ['fade'],

  fade: function() {
    if(this.get('content.fresh')) {
      return 'faded';
    }
  }.property('content.fresh')
});
