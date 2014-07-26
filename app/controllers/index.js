import Ember from 'ember';

export default Ember.Controller.extend({
  stickies: function() {
    return this.store.find("sticky");
  }.property(),

  freshSticky: function() {
    var freshSticky = this.get('stickies').filterBy('fresh').get('firstObject');
    if(freshSticky && freshSticky.get('text') !== "") {
      freshSticky.set('fresh', false);
      freshSticky.save();
      this.store.createRecord('sticky', {
        text: "",
        section: "",
        color: "#000",
        fresh: true
      })
    }
  }.observes('stickies.@each.text'),

  actions: {

  }
});
