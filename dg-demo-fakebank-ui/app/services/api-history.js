import Service from '@ember/service';

export default Service.extend({
  history: null,

  init() {
    this._super(...arguments);
    this.set('history', []);
  },

  add(method, url, status, response) {
    this.history.pushObject({ method, url, status, response });
  }
});
