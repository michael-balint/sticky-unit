import Ember from 'ember';

export default Ember.TextArea.extend({
  valueBinding: 'content.text',
  templateName: 'views/editsticky',
  classNameBindings: ['sticky', 'fade', 'color'],

  sticky: 'sticky',
  fade: function() {
    if(this.get('content.fresh')) {
      return 'faded';
    }
  }.property('content.fresh'),

  color: function() {
    return this.get('content.color');
  }.property('content.color')
});
