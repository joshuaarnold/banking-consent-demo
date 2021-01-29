import Route from '@ember/routing/route';
import OAuth2ImplicitGrantCallbackMixin from 'ember-simple-auth/mixins/oauth2-implicit-grant-callback-route-mixin';

export default Route.extend(OAuth2ImplicitGrantCallbackMixin, {
  authenticator: 'authenticator:oauth2-implicit',
});
