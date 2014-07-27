import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    openModal: function(modalName) {
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal'
      });
    },

    openStickyListModal: function(modalName) {
      var stickylistController = this.controllerFor('stickylist');
      stickylistController.set("section", modalName);
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal',
        controller: stickylistController
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
