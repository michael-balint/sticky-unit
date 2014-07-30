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
    return this.store.filter("sticky", {section: "goals-knowledgeskill"}, function(sticky) {
      return sticky.get("section") === "goals-knowledgeskill";
    });
  }.property('section'),

  correspondingStickiesTextArray: function() {
    var textArr = [];
    this.get('correspondingStickies').then(function(stickies) {
      textArr.pushObjects(stickies.mapProperty('text'));
    });
    return textArr;
  }.property('correspondingStickies.@each.text'),

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
