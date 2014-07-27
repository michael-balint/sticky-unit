import DS from 'ember-data';

var Unit = DS.Model.extend({
  title: DS.attr('string'),
  standard: DS.attr('string'),
  detail: DS.attr('string'),

  titleLength: function() {
    var l = this.get('title.length');
    if(l) {
      return this.get('title.length');
    } else {
      return 7;
    }
  }.property('title')
});

Unit.reopenClass({
  FIXTURES: [
    { id: "main-unit", title: "", standard: "", detail: "" }
  ]
});

export default Unit;