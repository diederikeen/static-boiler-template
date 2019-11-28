import dload from 'dload-lazyload';
import smoothscroll from 'smoothscroll-polyfill';

import './partials/navigationActions';

document.addEventListener('DOMContentLoaded', () => {
  smoothscroll.polyfill();

  dload({
    className: 'reveal',
    singleSource: true,
  });
});
