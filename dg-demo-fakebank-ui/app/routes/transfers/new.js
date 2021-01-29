import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord("transfer");
  },

  setupController(controller, model) {
    this.set("transfer", model);
    this.set("transfer.saving", false); // FIXME why is isSaving not working??
    return this._super(...arguments);
  },

  actions: {
    submitTransfer() {
      this.set("transfer.saving", true);
      this.get("transfer").save()
        .catch(() => {})
        .finally(() => { this.set("transfer.saving", false); })
    }
  }
});
