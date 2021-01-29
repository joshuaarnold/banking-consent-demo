import Adapter from './application';
import ENV from '../config/environment';

export default Adapter.extend({
  namespace: ENV.OPEN_BANKING_API_NAMESPACE,

  buildURL(modelName, id) {
    if (typeof(id) !== 'undefined') {
      return `${this.host}/${this.namespace}/accounts/${id}/balances`;
    }
    else {
      return `${this.host}/${this.namespace}/balances`;
    }
  }
});
