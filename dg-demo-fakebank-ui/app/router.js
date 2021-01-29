import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('authenticated', {path: 'app'}, function() {
    this.route('accounts', {resetNamespace: true}, function() {
      this.route('show', {path: ':account_id'});
    }),
    this.route('transfers', {resetNamespace: true}, function() {
      this.route('new', {path: ''});
    })
  });
  this.route('dg-demo-fakebank-ui/login');
  this.route('dg-demo-fakebank-ui/logout');
  this.route('dg-demo-fakebank-ui/oauth-callback');
});

export default Router;
