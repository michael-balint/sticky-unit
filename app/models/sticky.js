import DS from 'ember-data';

var Sticky = DS.Model.extend({
  text: DS.attr('string'),
  section: DS.attr('string'),
  fresh: DS.attr('boolean'),

  color: function() {
    var section = this.get('section');
    switch(section) {
      case "goals-knowledgeskill":
        return "color-1";
      case "goals-enduringunderstanding":
        return "color-2";
      case "goals-bigidea":
        return "color-3";
      case "evidence-knowledge":
      case "evidence-understanding":
      case "evidence-idea":
        return "color-4";
      case "assessments-performancetasks":
      case "assessments-academicprompts":
      case "assessments-quiztest":
        return "color-5";
      case "activities-listofassessments":
        return "color-6";
      default:
        return "color-0";
    }
  }.property('section')
});

Sticky.reopenClass({
  FIXTURES: [
    // goals-knowledgeskill
    { id: "sample-0", text: "some text", section: "goals-knowledgeskill", fresh: false },
    { id: "sample-1", text: "some text 2", section: "goals-knowledgeskill", fresh: false },
    { id: "fresh-0", text: "", section: "goals-knowledgeskill", fresh: true }
  ]
});

export default Sticky;