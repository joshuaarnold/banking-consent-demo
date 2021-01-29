import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  // session from ember-simple-auth
  // https://github.com/simplabs/ember-simple-auth
  session: service('session')
});
