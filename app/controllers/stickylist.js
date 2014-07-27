import Ember from 'ember';

export default Ember.ArrayController.extend({

  freshStickyObserver: function() {
    var section = this.get("section");
    var freshSticky = this.filterBy("fresh", true).get("firstObject");
    if(freshSticky && freshSticky.get("text.length")) {
      freshSticky.set("fresh", false);
      freshSticky.save();
      var newSticky = this.store.createRecord('sticky', {
        text: "",
        section: section,
        fresh: true
      });
      newSticky.save();
    }
  }.observes('@each.text')

});
