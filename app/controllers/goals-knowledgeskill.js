import Ember from 'ember';

export default Ember.ArrayController.extend({
  section: "goals-knowledgeskill",

  freshStickyObserver: function() {
    var section = this.get("section");
    var list = this;
    var freshSticky = this.filterBy("fresh", true).get("firstObject");
    if(freshSticky && freshSticky.get("text.length")) {
      freshSticky.set("fresh", false);
      freshSticky.save();
      var newSticky = this.store.createRecord('sticky', {
        text: "",
        section: section,
        fresh: true
      });
      list.get("content").pushObject(newSticky);
    }
  }.observes('@each.text')
});
