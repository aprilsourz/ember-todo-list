import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('list');
},
  actions: {
    createList(data){
      let list = this.get('store').createRecord('list', data);
      list.save()
  }
}
});
