import Ember from 'ember';

export default Ember.Controller.extend({
  section: "goals-knowledgeskill",

  stickies: function() {
    return this.store.find("sticky", {section: this.get("section")});
  }.property(),

  freshSticky: function() {
    var freshSticky = this.get('stickies').filterBy('fresh').get('firstObject');
    if(freshSticky && freshSticky.get('text') !== "") {
      freshSticky.set('fresh', false);
      freshSticky.save();
      this.store.createRecord('sticky', {
        text: "",
        section: "",
        fresh: true
      });
    }
  }.observes('stickies.@each.text')
});
