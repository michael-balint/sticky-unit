import Ember from 'ember';

export default Ember.View.extend({
  templateName: "views/stickygroup",

  section: null,

  stickies: function() {
    var section = this.get('section');
    return this.get('controller').get('store').filter("sticky", {section: section}, function(sticky) {
      return sticky.get("section") === section;
    });
  }.property('section')

});
