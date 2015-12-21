import Ember from 'ember';
const { Component, inject } = Ember;

export default Component.extend({
  screen: inject.service()
});
