/* global QUnit */
import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';
import { minDesktopWidth } from '../services/screen';

QUnit.begin(() => {
  let mqVal = window.Modernizr.mq(`(min-width: ${minDesktopWidth})`);
  if (!mqVal) {
    console.warn(`Acceptance tests require a minimum screen width of ${minDesktopWidth}px. Please expand the window and/or reduce the size of the dev tools.`);
  }
});

setResolver(resolver);
