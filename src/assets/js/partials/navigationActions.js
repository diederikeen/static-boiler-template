const navs = document.getElementsByClassName('m-nav');

function initNavActions() {
  const bodyTag = document.body;
  let currentScrollPosition = window.scrollY;
  let ticking = false;
  let isScrolling = null;

  function scrollToTarget(id) {
    const target = document.getElementById(id);
    target.scrollIntoView({ behavior: 'smooth' });
  }

  function setClasses() {
    clearInterval(isScrolling);
    bodyTag.classList.add('no-overflow');
  }

  function doSomething() {
    const bool = window.scrollY === currentScrollPosition;
    if (bool) setClasses(doSomething);
  }

  function handleClick(event) {
    const { currentTarget } = event;
    const id = currentTarget.getAttribute('href').replace('#', '');

    setTimeout(() => {
      scrollToTarget(id);
      isScrolling = setInterval(doSomething, 300);
    }, 250);

    if (bodyTag.classList.contains('no-overflow')) bodyTag.classList.remove('no-overflow');
    event.preventDefault();
  }

  [].map.call(navs, (nav) => {
    const anchors = nav.getElementsByTagName('a');

    [].map.call(anchors, (anchor) => {
      anchor.addEventListener('click', handleClick);
    });
  });

  window.addEventListener('scroll', () => {
    currentScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        ticking = false;
      });
      ticking = true;
    }
  });
}

initNavActions();
