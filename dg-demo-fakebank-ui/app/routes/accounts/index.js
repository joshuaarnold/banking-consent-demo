import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll("account", {reload: true});
  },

  actions: {
    refreshAccounts() {
      this.store.unloadAll("account");
      this.refresh();
    }
  }
});
