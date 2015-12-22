import { test } from 'qunit';
import moduleForAcceptance from 'responsive-testing/tests/helpers/module-for-acceptance';
import startApp from 'responsive-testing/tests/helpers/start-app';
import destroyApp from 'responsive-testing/tests/helpers/destroy-app';

let application;
let screenService;

moduleForAcceptance('Acceptance | index', {
  beforeEach() {
    application = startApp();
    screenService = application.__container__.lookup('service:screen');
  },

  afterEach() {
    destroyApp(application);
  }
});

test('visiting / shows nav bar', function(assert) {
  visit('/');

  andThen(function() {
    assert.ok(screenService.get('isDesktop'), 'Browser must be desktop width for this test');
    assert.equal(currentURL(), '/');
    assert.equal(find('span.desktop-nav-bar').length, 1, 'Desktop nav bar visible');
  });
});
