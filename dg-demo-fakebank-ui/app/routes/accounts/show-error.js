import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, error) {
    controller.set('accountId', error.accountId);
    return this._super(...arguments);
  }
});
