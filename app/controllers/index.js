import Ember from 'ember';

export default Ember.Controller.extend({
  unit: function() {
    return this.store.find("unit", "main-unit");
  }.property(),

  goalsKnowledgeSkillStickies: function() {
    return this.store.filter('sticky', {section: "goals-knowledgeskill"}, function(sticky) {
      return sticky.get('section') === "goals-knowledgeskill";
    });
  }.property()
});
