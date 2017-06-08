import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord(store, type, record) {
    let api = this.get('host');
    // serialize jQuery take an our data object(pojo) and format
    // it into the way the api wants it.
    let serialized = this.serialize(record, {includeId: true});
    let listId = serialized.list_id;
    let url = `${api}/lists/${listId}/items`;
    let data = { item: serialized};
    return this.ajax(url, 'POST', {data});
  }
});
