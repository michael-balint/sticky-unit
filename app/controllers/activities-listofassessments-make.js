import StickylistController from './stickylist';

export default StickylistController.extend({
  emptyStickiesObserver: function() {
    var stickies = this.get('sticky.stickies')
    if(!stickies.get('length')) {
      var newSticky = this.store.createRecord('sticky', {
        text: "",
        section: "activities-listofassessments",
        fresh: true
      });
      this.set('freshSticky', newSticky);
      stickies.pushObject(newSticky);
    }
  }.observes('sticky.stickies'),

  freshStickyObserver: function() {
    var freshSticky = this.get('freshSticky');
    if(freshSticky.get('text')) {
      freshSticky.set('fresh', false);
      var newSticky = this.store.createRecord('sticky', {
        text: "",
        section: "activities-listofassessments",
        fresh: true
      });
      this.set('freshSticky', newSticky);
      var stickies = this.get('sticky.stickies')
      stickies.pushObject(newSticky);
    }
  }.observes('freshSticky.text')
});
