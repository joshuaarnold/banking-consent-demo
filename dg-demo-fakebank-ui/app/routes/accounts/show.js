import Route from '@ember/routing/route';
import RSVP  from 'rsvp';

export default Route.extend({
  model(params) {
    this.set('accountId', params.account_id);

    return RSVP.hashSettled({
      account: this.store.findRecord('account', params.account_id, {reload: true}),
      balance: this.store.findRecord('balance', params.account_id, {reload: true})
    }).then(function(hash) {
      if (hash.account.value) {
        return hash;
      }
      else {
        return RSVP.reject(hash.account.reason);
      }
    })
  },

  setupController(controller, hash) {
    controller.set('accountId', this.get('accountId'));
    controller.set('account', hash.account.value);
    if (hash.balance.value) {
      controller.set('balance', hash.balance.value);
    }
  },

  actions: {
    refreshAccount() {
      this.refresh();
    },
    error(error) {
      // HACK passing the accountId to the error route via the error object
      error.accountId = this.get('accountId');
      return true;
    }
  }
});
