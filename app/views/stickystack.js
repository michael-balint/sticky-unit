import Ember from 'ember';

export default Ember.View.extend({
  templateName: "views/stickystack",

  section: null,

  stickies: function() {
    var section = this.get('section');
    var store = this.get('controller').get('store');

    return store.filter("sticky", {section: section, fresh: false}, function(sticky) {
      return sticky.get("section") === section && sticky.get("fresh") === false;
    });
  }.property('section'),

  freshStickies: function() {
    var section = this.get('section');
    var store = this.get('controller').get('store');
    return store.filter('sticky', {section: section, fresh: true}, function(sticky) {
      return sticky.get("section") === section && sticky.get("fresh") === true;
    });
  }.property('section'),

  makeFreshStickies: function() {
    if(!this.get("freshStickies.length")) {
      var section = this.get('section');
      var store = this.get('controller').get('store');
      var newSticky = store.createRecord('sticky', {
        text: "",
        section: section,
        fresh: true
      });
      newSticky.save();
    }
  }.observes('freshStickies.length'),

  modalName: function() {
    var section = this.get('section');
    switch(section) {
      case "goals-knowledgeskill":
      case "goals-enduringunderstanding":
      case "goals-bigidea":
        return "row-0-modal";
      case "evidence-knowledge":
      case "evidence-understanding":
      case "evidence-idea":
        return "row-1-modal";
      case "assessments-performancetasks":
      case "assessments-academicprompts":
      case "assessments-quiztest":
        return "row-2-modal";
      case "activities-listofassessments":
        return "row-3-modal";
      default:
        return "row-0-modal";
    }
  }.property('section')
});
