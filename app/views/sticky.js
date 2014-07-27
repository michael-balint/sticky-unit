import Ember from 'ember';

export default Ember.View.extend({
  templateName: "views/sticky",

  classNameBindings: ['sticky', 'indexClass', 'color'],

  sticky: 'stacked-sticky',

  indexClass: function() {
    return "rotate-" + this.get('_parentView.contentIndex');
  }.property(),

  color: function() {
    return this.get('content.color');
  }.property('content.color')

});
