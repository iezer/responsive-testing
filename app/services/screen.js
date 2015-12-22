import EmberScreen, { breakpoint } from 'ember-screen';

export const minDesktopWidth = '480px';

export default EmberScreen.extend({
  isMobile: breakpoint('(max-width: 479px)'),
  isDesktop: breakpoint(`(min-width: ${minDesktopWidth})`)
});
