import Component from '@ember/component';
import BootstrapTheme from 'ember-models-table/themes/bootstrap4';

const Theme = BootstrapTheme.extend({
  components: {
    'global-filter': 'bootstrap4-global-filter',
  },
  messages: {
    noDataToShow: "Loading..."
  }
});

const theme = new Theme();

export default Component.extend({
  theme: theme,

  columns: [
    {propertyName: 'accountId', title: 'ID', component: 'table-account-id-cell'},
    {propertyName: 'accountType', title: 'Type'},
    {propertyName: 'accountSubType', title: 'Sub-Type'},
    {propertyName: 'accountSortCode', title: 'Sort Code'},
  ]
});
