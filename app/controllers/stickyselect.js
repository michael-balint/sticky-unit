import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    toggleSelected: function(sticky) {
      var forSticky = this.get("forSticky");
      var stickies = forSticky.get("stickies");
      if(stickies.filterBy('id', sticky.get('id')).length) {
        stickies.removeObject(sticky);
        sticky.set("selected", false);
      } else {
        stickies.addObject(sticky);
        sticky.set("selected", true);
      }
    }
  }
});
