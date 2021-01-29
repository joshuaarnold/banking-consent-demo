import Component from '@ember/component';
import { computed } from '@ember/object';
import BootstrapTheme from 'ember-models-table/themes/bootstrap4';

const Theme = BootstrapTheme.extend({
  components: {
    'global-filter': 'bootstrap4-global-filter',
  }
});

const theme = new Theme();

export default Component.extend({
  classNames: ['container'],

  theme: theme,

  columns: computed(function() {
    if (this.transactions.get('length') > 0) {
      return [
        {propertyName: 'posted', component: 'table-date-cell'},
        {propertyName: 'description'},
        {propertyName: 'amount', component: 'table-amount-cell'},
        {propertyName: 'confirmation'},
      ];
    }
    else {
      return [
        {propertyName: 'posted'},
        {propertyName: 'description'},
        {propertyName: 'amount'},
        {propertyName: 'confirmation'},
      ];
    }
  })
});
