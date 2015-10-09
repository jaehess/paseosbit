import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(Date),
  time: DS.attr(String),
  challenge: DS.attr(Boolean)
}).reopenClass({
  FIXTURES: [
    {
      id: 100,
      date: 'Wed Oct 28 2015',
      time: '2-3pm',
      challenge: true
    },
    {
      id: 101,
      date: 'Thu Nov 12 2015',
      time: '3:15-4:15pm',
      challenge: false
    },
    {
      id: 102,
      date: 'Wed Nov 18 2015',
      time: '2-3pm',
      challenge: true
    },
    {
      id: 103,
      date: 'Wed Dec 9 2015',
      time: '2-3pm',
      challenge: false
    },
    {
      id: 104,
      date: 'Wed Dec 16 2015',
      time: '2-3pm',
      challenge: true
    }
  ]
});
