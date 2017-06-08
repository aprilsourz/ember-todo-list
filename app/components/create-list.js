import Ember from 'ember';

export default Ember.Component.extend({
  newList: {
    title: null,
    hidden: false
  },
  actions: {
  createList() {
    let data = this.get('newList');
    this.sendAction('createList', data)
    this.set('newList.title', null);
  }
}
});
