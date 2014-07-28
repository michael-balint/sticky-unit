import Ember from 'ember';

export default Ember.Controller.extend({
  unit: function() {
    var unit = this.store.find("unit", "main-unit");
    var controller = this;

    unit.then(function(unit) {
      window.changeUnit = function(newUnit) {
        unit.set('standard', newUnit.standard);
        unit.set('detail', newUnit.detail);
        controller.send('closeModal');
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
