import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    openModal: function(modalName, outlet) {
      return this.render(modalName, {
        into: 'application',
        outlet: outlet
      });
    },

    openStickyListModal: function(modalName, outlet) {
      var stickylistController = this.controllerFor('stickylist');
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

    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
