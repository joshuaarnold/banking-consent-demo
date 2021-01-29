import DS from 'ember-data';
import { alias } from '@ember/object/computed';

export default DS.Model.extend({
  accountId: DS.attr('number'),
  accountType: DS.attr('string'),
  accountSubType: DS.attr('string'),
  account: DS.attr(),
  accountSortCode: alias('account.identification')
});
