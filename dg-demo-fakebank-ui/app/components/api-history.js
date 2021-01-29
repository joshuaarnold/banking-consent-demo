import Component from '@ember/component';
import { inject as service } from '@ember/service';
import prettyPrintJson from 'pretty-print-json';

export default Component.extend({
  history: service('api-history'),

  init() {
    this.index = 0;
    this._super(...arguments);
    this.get('history').get('history').addArrayObserver(this);
  },

  arrayWillChange() {
  },

  arrayDidChange() {
    this.appendAll();
  },

  didRender() {
    if (this.index === 0) {
      this.appendAll();
    }
  },

  appendAll() {
    const array = this.get('history').get('history');
    for ( ; this.index < array.length; this.index++) {
      let item = array.objectAt(this.index);
      if (item.response) {
        this.$().prepend(`<pre>${prettyPrintJson.toHtml(item.response)}</pre>`);
      }
      else {
        this.$().prepend('<i>Response has no content</i><br>');
      }
      this.$().prepend(`<p><pre>${item.method} ${item.url} => ${item.status}</pre></p>`);
    }
  }
});
