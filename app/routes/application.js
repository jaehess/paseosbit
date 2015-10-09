import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      events: this.store.findAll('workshop'),
      projects: this.store.findAll('project')
    })
  }
});
