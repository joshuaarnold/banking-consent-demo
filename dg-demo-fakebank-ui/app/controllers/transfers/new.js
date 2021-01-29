import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    submit() {
      this.send("submitTransfer");
    }
  }
});
