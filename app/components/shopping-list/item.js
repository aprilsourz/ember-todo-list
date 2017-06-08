import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['listItemCompleted'],
  listItemCompleted: Ember.computed.alias('item.done'),
  actions: {
    toggleDone () {
      this.sendAction('toggleItemDone',this.get('item'));
    },
    deleteItem() {
      this.sendAction('deleteItem', this.get('item'))
    }
  },
});
