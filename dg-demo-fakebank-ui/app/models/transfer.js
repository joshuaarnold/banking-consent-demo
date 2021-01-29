import DS from 'ember-data';

export default DS.Model.extend({
  fromAccountId: DS.attr('string'),
  toAccountId: DS.attr('string'),
  amount: DS.attr('string')
});
