import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    refresh() {
      this.transitionToRoute("accounts.show", this.get("accountId"));
    }
  }
});
