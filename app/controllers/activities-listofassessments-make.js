import StickylistController from './stickylist';

export default StickylistController.extend({
  assessments: function() {
    var stickies = this.get('sticky.stickies');

    var assessments = stickies.filter(function(sticky) {
      return sticky.get('section') === 'activities-listofassessments';
    });

    if(!assessments.get('length')) {
      var newSticky = this.store.createRecord('sticky', {
        text: "",
        section: "activities-listofassessments",
        fresh: true
      });
      this.set('freshSticky', newSticky);
      stickies.pushObject(newSticky);
      assessments.pushObject(newSticky);
    }

    return assessments;
  }.property('sticky.stickies'),

  freshStickyObserver: function() {
    var freshSticky = this.get('freshSticky');
    if(freshSticky.get('text')) {
      freshSticky.set('fresh', false);
      var stickies = this.get('sticky.stickies');
      var assessments = this.get('assessments');
      var newSticky = this.store.createRecord('sticky', {
        text: "",
        section: "activities-listofassessments",
        fresh: true
      });
      this.set('freshSticky', newSticky);
      stickies.pushObject(newSticky);
      assessments.pushObject(newSticky);
    }
  }.observes('freshSticky.text')
});
