import EmberScreen, { breakpoint } from 'ember-screen';

export default EmberScreen.extend({
  isMobile: breakpoint('(max-width: 479px)'),
  isDesktop: breakpoint('(min-width: 480px)')
});
