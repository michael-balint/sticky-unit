import Ember from 'ember';

export default Ember.ArrayController.extend({
  freshStickyObserver: function() {
    var freshSticky = this.filterBy("fresh", true).get("firstObject");
    if(freshSticky && freshSticky.get("text.length")) {
      freshSticky.set("fresh", false);
      freshSticky.save();
    }
  }.observes('@each.text'),

  correspondingStickies: function() {
    var correspondingSection = this.get('correspondingSection');
    return this.store.filter("sticky", {section: correspondingSection}, function(sticky) {
      return sticky.get("section") === correspondingSection && !sticky.get("fresh");
    });
  }.property(),

  videoVisible: false,

  actions: {
    showVideo: function() {
      this.set('videoVisible', true);
    },
    hideVideo: function() {
      this.set('videoVisible', false);
    }
  }
});
