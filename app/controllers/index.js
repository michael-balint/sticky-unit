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

      window.exportData = function() {
        var unitStrArr = [];
        var units = controller.store.all('unit');
        units.forEach(function(unit) {
          unitStrArr.push(JSON.stringify(unit));
        });

        console.log(unitStrArr.join(','));

        var stickyStrArr = [];
        var stickies = controller.store.all('sticky');
        stickies.forEach(function(sticky) {
          if(!sticky.get('fresh')) {
            stickyStrArr.push(JSON.stringify(sticky));
          }
        });

        console.log(stickyStrArr.join(','));
      };
    });

    return unit;
  }.property(),

  assessments: function() {
    return this.store.filter("sticky", function(sticky) {
      var section = sticky.get('section');
      return !sticky.get('fresh') &&
        (section.indexOf('assessments') > -1);
    });
  }.property()
});
