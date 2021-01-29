import Adapter from './application';
import ENV from '../config/environment';

export default Adapter.extend({
  namespace: ENV.OPEN_BANKING_API_NAMESPACE
});
