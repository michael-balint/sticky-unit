import DS from 'ember-data';

var Sticky = DS.Model.extend({
  text: DS.attr('string'),
  section: DS.attr('string'),
  fresh: DS.attr('boolean')
});

Sticky.reopenClass({
  FIXTURES: [
    // goals-knowledgeskill
    { id: 1, text: "some text", section: "goals-knowledgeskill", fresh: false },
    { id: 2, text: "some text 2", section: "goals-knowledgeskill", fresh: false },
    { id: 3, text: "", section: "goals-knowledgeskill", fresh: true },

    // goals-enduringunderstanding
    { id: 4, text: "some text extra", section: "goals-enduringunderstanding", fresh: false }
  ]
});

export default Sticky;