import DS from 'ember-data';
import _ from 'lodash';

function lowercaseKeys(object) {
  return _.transform(object, (result, value, key) => {
    key = _.camelCase(key);
    result[key] = _.isObject(value) ? lowercaseKeys(value) : value;
  }, {});
}

export default DS.JSONSerializer.extend({
  normalize(typeClass, hash) {
    hash = lowercaseKeys(hash);
    const result = this._super(typeClass, hash);
    return result;
  },
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    payload = payload.Data[_.capitalize(primaryModelClass.modelName)];
    const result = this._super(store, primaryModelClass, payload, id, requestType);
    return result;
  },
  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    payload = payload.Data[_.capitalize(primaryModelClass.modelName)][0];
    payload.type = primaryModelClass.modelName;
    const result = this._super(store, primaryModelClass, payload, id, requestType);
    return result;
  }
});
