import DS from 'ember-data';

var Sticky = DS.Model.extend({
  text: DS.attr('string'),
  section: DS.attr('string'),
  color: DS.attr('string'),
  fresh: DS.attr('boolean')
});

Sticky.reopenClass({
  FIXTURES: [
    { id: 1, text: "some text", section: "", color: "#000", fresh: false },
    { id: 2, text: "some text 2", section: "", color: "#000", fresh: false },
    { id: 3, text: "", section: "", color: "#000", fresh: true }
  ]
});

export default Sticky;