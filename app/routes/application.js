import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    openModal: function(modalName, outlet) {
      return this.render(modalName, {
        into: 'application',
        outlet: outlet,
        controller: 'index'
      });
    },

    openStickyListModal: function(modalName, outlet) {
      var stickylistController = this.controllerFor(modalName);
      var route = this;
      this.store.filter("sticky", {section: modalName}, function(sticky) {
        return sticky.get("section") === modalName;
      }).then(function(stickies) {
        stickylistController.set("section", modalName);
        stickylistController.set("content", stickies);
        route.render(modalName, {
          into: 'application',
          outlet: outlet,
          controller: stickylistController
        });
      });
    },

    openStickySelectModal: function(stickySelectOptions, forSticky) {
      var stickyselectController = this.controllerFor('stickyselect');
      stickyselectController.set('content', stickySelectOptions);
      stickyselectController.set('forSticky', forSticky);
      this.render('select-multi-stickies', {
        into: 'application',
        outlet: 'select-modal',
        controller: stickyselectController
      });
    },

    openLearningActivitiesModal: function() {
      var stickylistController = this.controllerFor('activities-listofassessments');
      var route = this;
      this.store.filter("sticky", function(sticky) {
        var section = sticky.get('section');
        var fresh = sticky.get('fresh');
        return !fresh && (section === 'assessments-academicprompts' ||
          section === 'assessments-performancetasks' ||
          section === 'assessments-quiztest');
      }).then(function(stickies) {
        stickylistController.set("section", 'activities-listofassessments');
        stickylistController.set("content", stickies);
        route.render('activities-listofassessments', {
          into: 'application',
          outlet: 'row-3-modal',
          controller: stickylistController
        });
      });
    },

    openMakeLearningActivitiesModal: function(sticky) {
      var stickylistController = this.controllerFor('activities-listofassessments-make');
      stickylistController.set("sticky", sticky);
      this.render('activities-listofassessments-make', {
        into:'application',
        outlet: 'row-3-modal-2',
        controller: stickylistController
      });
    },

    closeModal: function(modalName) {
      return this.disconnectOutlet({
        outlet: modalName,
        parentView: 'application',
      });
    },

    populateStandard: function(standard, detail) {
      this.store.find('unit', 'main-unit').then(function(unit) {
        unit.set('standard', standard);
        unit.set('detail', detail);
      });
      this.send('closeModal');
    }
  }
});
