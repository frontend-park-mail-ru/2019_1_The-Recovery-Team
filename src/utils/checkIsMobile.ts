const MOBILE_SIDE = 550;

export const checkIsMobile = () => {
  const { clientHeight, clientWidth } = window.document.body;
  if (Math.min(clientHeight, clientWidth) <= MOBILE_SIDE) {
    document.body.classList.add('isMobile');

    if (clientHeight < clientWidth) {
      document.body.classList.add('isHorizontalMobile');
    } else {
      document.body.classList.remove('isHorizontalMobile');
    }
  } else {
    document.body.classList.remove('isMobile', 'isHorizontalMobile');
  }
};

window.addEventListener('resize', checkIsMobile);
