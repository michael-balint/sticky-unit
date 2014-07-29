import Ember from 'ember';

export default Ember.ArrayController.extend({
  // TODO(Balint): make a controller mimicking this for each modal row
  freshStickyObserver: function() {
    var freshSticky = this.filterBy("fresh", true).get("firstObject");
    if(freshSticky && freshSticky.get("text.length")) {
      freshSticky.set("fresh", false);
      freshSticky.save();
    }
  }.observes('@each.text')

});
