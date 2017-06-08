import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteList() {
      this.sendAction('deleteList', this.get('list'))
    }
  }
});
