import DS from 'ember-data';
import { alias } from '@ember/object/computed';

export default DS.Model.extend({
  amount: DS.attr(),
  balanceAmount: alias('amount.amount'),
  creditDebitIndicator: DS.attr('string'),
  dateTime: DS.attr('date'),
  accountId: DS.attr('number')
});
