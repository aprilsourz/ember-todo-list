import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateList(){
      this.sendAction('updateList', this.get('list'))

    }
  }
});
