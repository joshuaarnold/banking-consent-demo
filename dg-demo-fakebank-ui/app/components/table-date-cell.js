import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'span',
  attributeBindings: ['datetime:title'],

  datetime: computed(function() {
    return this.record.get(this.column.propertyName);
  })
});
