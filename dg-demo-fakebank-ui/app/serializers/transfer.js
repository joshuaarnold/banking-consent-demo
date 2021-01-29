import DS from 'ember-data';
import { underscore } from '@ember/string';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(key) {
    return underscore(key);
  },

  extractErrors(store, typeClass, payload) {
    /*
    FROM JSON-API format:

    payload.errors = [{
      title: "message",
      detail: "message"
      source: { pointer: '/data/attributes/age' }
    }]

    TO

    {
      "name": ["Must be present"],
      "age":  ["Must be present", "must be a number"]
    }

     */
    if (Array.isArray(payload.errors)) {
      let out = {};
      payload.errors.forEach(error => {
        // FIXME for actual error.source.pointer
        out['base'] = out['base'] || [];
        out['base'].push(error.detail || error.title);
      });
      return out;
    }
    else {
      return this._super(...arguments);
    }
  }
});
