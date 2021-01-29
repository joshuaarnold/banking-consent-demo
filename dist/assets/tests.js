'use strict';

define('dg-demo-fakebank-ui/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _test) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;


  const TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    const authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _test.default);
    }
  }

  function authenticateSession(app, sessionData) {
    const { __container__: container } = app;
    const session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return app.testHelpers.wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    const session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return app.testHelpers.wait();
  }
});
define('dg-demo-fakebank-ui/tests/helpers/resolver', ['exports', 'dg-demo-fakebank-ui/resolver', 'dg-demo-fakebank-ui/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('dg-demo-fakebank-ui/tests/integration/components/nav-bar-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('nav-bar', 'Integration | Component | nav bar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "1eDpu8Iw",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"nav-bar\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "rwhJAS6T",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"nav-bar\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dg-demo-fakebank-ui/tests/integration/components/table-amount-cell-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('table-amount-cell', 'Integration | Component | table amount cell', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "7SNhN4bs",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"table-amount-cell\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "Z6BdUOKQ",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"table-amount-cell\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dg-demo-fakebank-ui/tests/integration/components/table-date-cell-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('table-date-cell', 'Integration | Component | table date cell', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "S1pl/cQ2",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"table-date-cell\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "wc+etIBL",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"table-date-cell\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dg-demo-fakebank-ui/tests/integration/components/transactions-table-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('transactions-table', 'Integration | Component | transactions table', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Rre6RgIu",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"transactions-table\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "DVs7TlmP",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"transactions-table\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dg-demo-fakebank-ui/tests/lint/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/account.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/account.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/balance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/balance.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/transaction.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/transaction.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/transfer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/transfer.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('authenticators/oauth2-implicit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticators/oauth2-implicit.js should pass ESLint\n\n');
  });

  QUnit.test('components/accounts-table.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/accounts-table.js should pass ESLint\n\n5:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n8:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n18:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('components/api-history.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/api-history.js should pass ESLint\n\n');
  });

  QUnit.test('components/bootstrap4-global-filter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/bootstrap4-global-filter.js should pass ESLint\n\n');
  });

  QUnit.test('components/nav-bar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/nav-bar.js should pass ESLint\n\n');
  });

  QUnit.test('components/table-account-id-cell.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/table-account-id-cell.js should pass ESLint\n\n');
  });

  QUnit.test('components/table-amount-cell.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/table-amount-cell.js should pass ESLint\n\n');
  });

  QUnit.test('components/table-date-cell.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/table-date-cell.js should pass ESLint\n\n');
  });

  QUnit.test('components/transactions-table.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/transactions-table.js should pass ESLint\n\n6:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('controllers/accounts/index-error.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/accounts/index-error.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/accounts/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/accounts/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/accounts/show-error.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/accounts/show-error.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/accounts/show.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/accounts/show.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/transfers/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/transfers/new.js should pass ESLint\n\n');
  });

  QUnit.test('models/account.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/account.js should pass ESLint\n\n');
  });

  QUnit.test('models/balance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/balance.js should pass ESLint\n\n');
  });

  QUnit.test('models/transaction.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/transaction.js should pass ESLint\n\n');
  });

  QUnit.test('models/transfer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/transfer.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/accounts/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/accounts/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/accounts/show-error.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/accounts/show-error.js should pass ESLint\n\n');
  });

  QUnit.test('routes/accounts/show.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/accounts/show.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/authenticated.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/authenticated.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });

  QUnit.test('routes/logout.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/logout.js should pass ESLint\n\n');
  });

  QUnit.test('routes/oauth-callback.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/oauth-callback.js should pass ESLint\n\n');
  });

  QUnit.test('routes/transactions.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/transactions.js should pass ESLint\n\n');
  });

  QUnit.test('routes/transfers/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/transfers/new.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/account.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/account.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/balance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/balance.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/transfer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/transfer.js should pass ESLint\n\n');
  });

  QUnit.test('services/api-history.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/api-history.js should pass ESLint\n\n');
  });
});
define('dg-demo-fakebank-ui/tests/lint/templates.template.lint-test', [], function () {
  'use strict';

  QUnit.module('TemplateLint');

  QUnit.test('dg-demo-fakebank-ui/templates/accounts/index-error.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dg-demo-fakebank-ui/templates/accounts/index-error.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dg-demo-fakebank-ui/templates/accounts/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dg-demo-fakebank-ui/templates/accounts/index.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dg-demo-fakebank-ui/templates/accounts/show-error.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dg-demo-fakebank-ui/templates/accounts/show-error.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dg-demo-fakebank-ui/templates/accounts/show.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dg-demo-fakebank-ui/templates/accounts/show.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dg-demo-fakebank-ui/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dg-demo-fakebank-ui/templates/application.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dg-demo-fakebank-ui/templates/authenticated.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dg-demo-fakebank-ui/templates/authenticated.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dg-demo-fakebank-ui/templates/components/accounts-table.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dg-demo-fakebank-ui/templates/components/accounts-table.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dg-demo-fakebank-ui/templates/components/bootstrap4-global-filter.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dg-demo-fakebank-ui/templates/components/bootstrap4-global-filter.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dg-demo-fakebank-ui/templates/components/nav-bar.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dg-demo-fakebank-ui/templates/components/nav-bar.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dg-demo-fakebank-ui/templates/components/table-account-id-cell.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dg-demo-fakebank-ui/templates/components/table-account-id-cell.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dg-demo-fakebank-ui/templates/components/table-amount-cell.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dg-demo-fakebank-ui/templates/components/table-amount-cell.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dg-demo-fakebank-ui/templates/components/table-date-cell.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dg-demo-fakebank-ui/templates/components/table-date-cell.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dg-demo-fakebank-ui/templates/components/transactions-table.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dg-demo-fakebank-ui/templates/components/transactions-table.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dg-demo-fakebank-ui/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dg-demo-fakebank-ui/templates/index.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dg-demo-fakebank-ui/templates/login.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dg-demo-fakebank-ui/templates/login.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dg-demo-fakebank-ui/templates/oauth-callback.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dg-demo-fakebank-ui/templates/oauth-callback.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dg-demo-fakebank-ui/templates/transactions.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dg-demo-fakebank-ui/templates/transactions.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dg-demo-fakebank-ui/templates/transfers/new.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dg-demo-fakebank-ui/templates/transfers/new.hbs should pass TemplateLint.\n\n');
  });
});
define('dg-demo-fakebank-ui/tests/lint/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/nav-bar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nav-bar-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/table-amount-cell-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/table-amount-cell-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/table-date-cell-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/table-date-cell-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/transactions-table-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/transactions-table-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/transaction-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/transaction-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/authenticated-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/authenticated-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/oauth-callback-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/oauth-callback-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/transactions-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/transactions-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });
});
define('dg-demo-fakebank-ui/tests/test-helper', ['dg-demo-fakebank-ui/app', 'dg-demo-fakebank-ui/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('dg-demo-fakebank-ui/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let adapter = this.subject();
    assert.ok(adapter);
  });
});
define('dg-demo-fakebank-ui/tests/unit/models/transaction-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('transaction', 'Unit | Model | transaction', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('dg-demo-fakebank-ui/tests/unit/routes/authenticated-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:authenticated', 'Unit | Route | authenticated', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('dg-demo-fakebank-ui/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('dg-demo-fakebank-ui/tests/unit/routes/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('dg-demo-fakebank-ui/tests/unit/routes/oauth-callback-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:oauth-callback', 'Unit | Route | oauth callback', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('dg-demo-fakebank-ui/tests/unit/routes/transactions-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:transactions', 'Unit | Route | transactions', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('dg-demo-fakebank-ui/tests/unit/serializers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    let record = this.subject();

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('dg-demo-fakebank-ui/config/environment', [], function() {
  var prefix = 'dg-demo-fakebank-ui';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dg-demo-fakebank-ui/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
