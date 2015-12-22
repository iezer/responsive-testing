import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const screenServiceStub = Ember.Service.extend({
  isMobile: false,
  isDesktop: true
});

moduleForComponent('nav-bar', 'Integration | Component | nav bar', {
  integration: true,

  beforeEach() {
    this.register('service:screen', screenServiceStub);
    this.inject.service('screen');
  }
});

test('it renders in desktop mode', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{nav-bar}}`);

  assert.equal(this.$().text().trim(), 'Desktop Nav Bar');
});

test('it renders in mobile mode', function(assert) {
  this.set('screen.isMobile', true);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +
  this.render(hbs`{{nav-bar}}`);

  assert.equal(this.$().text().trim(), '☰');
});
