import EmberScreen, { breakpoint } from 'ember-screen';

export const minDesktopWidth = 480;

export default EmberScreen.extend({
  isMobile: breakpoint(`(max-width: ${minDesktopWidth - 1}px)`),
  isDesktop: breakpoint(`(min-width: ${minDesktopWidth}px)`)
});
