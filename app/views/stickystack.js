import Ember from 'ember';

export default Ember.View.extend({
  templateName: "views/stickystack",

  section: null,

  stickies: function() {
    var section = this.get('section');
    var store = this.get('controller').get('store');

    return store.filter("sticky", {section: section, fresh: false}, function(sticky) {
      return sticky.get("section") === section && sticky.get("fresh") === false;
    });
  }.property('section'),

  freshStickies: function() {
    var section = this.get('section');
    var store = this.get('controller').get('store');
    return store.filter('sticky', {section: section, fresh: true}, function(sticky) {
      return sticky.get("section") === section && sticky.get("fresh") === true;
    });
  }.property('section'),

  makeFreshStickies: function() {
    if(!this.get("freshStickies.length")) {
      //console.log("no stickies for " + this.get("section") + ", creating one");

      var section = this.get('section');
      var store = this.get('controller').get('store');
      var newSticky = store.createRecord('sticky', {
        text: "",
        section: section,
        fresh: true
      });
      newSticky.save();
    }
  }.observes('freshStickies.length')
});
