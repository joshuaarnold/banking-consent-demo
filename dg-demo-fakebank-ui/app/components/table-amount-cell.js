import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'span',
  classNameBindings: ['colorize'],

  amount: computed(function() {
    const value = this.record.get(this.column.propertyName);
    if (value >= 0)
      return `$ ${value.toFixed(2)}`;
    else
      return `$(${(-1 * value).toFixed(2)})`;
  }),

  colorize: computed(function() {
    const value = this.record.get(this.column.propertyName);
    if (value >= 0)
      return '';
    else
      return 'transaction-negative';
  }),

});
