import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    toggleSelected: function(sticky) {
      var forSticky = this.get("forSticky");
      var stickies = forSticky.get("stickies");
      if(stickies.filterBy('id', sticky.get('id')).length) {
        stickies.removeObject(sticky);
      } else {
        stickies.addObject(sticky);
      }
    }
  }
});
