import Ember from 'ember';

export default Ember.Controller.extend({
  unit: function() {
    var unit = this.store.find("unit", "main-unit");

    unit.then(function(unit) {
      window.changeUnit = function(newUnit) {
        unit.set('standard', newUnit.standard);
        unit.set('detail', newUnit.detail);
      };
    });

    return unit;
  }.property(),

  goalsKnowledgeSkillStickies: function() {
    return this.store.filter('sticky', {section: "goals-knowledgeskill"}, function(sticky) {
      return sticky.get('section') === "goals-knowledgeskill";
    });
  }.property()
});
