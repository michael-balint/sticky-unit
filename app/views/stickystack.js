import Ember from 'ember';

export default Ember.View.extend({
  templateName: "views/stickystack",

  section: null,

  stickies: function() {
    var section = this.get('section');
    return this.get('controller').get('store').filter("sticky", {section: section, fresh: false}, function(sticky) {
      return sticky.get("section") === section && sticky.get("fresh") === false;
    });
  }.property('section')

});
