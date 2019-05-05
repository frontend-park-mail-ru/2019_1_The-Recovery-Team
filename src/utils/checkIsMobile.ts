const MOBILE_SIDE = 500;

let isMobile: boolean = false;

const checkIsMobile = () => {
  const { clientHeight, clientWidth } = window.document.body;
  if (Math.min(clientHeight, clientWidth) <= MOBILE_SIDE) {
    isMobile = true;
    document.body.classList.add('isMobile');

    if (clientHeight < clientWidth) {
      document.body.classList.add('isHorizontalMobile');
    } else {
      document.body.classList.remove('isHorizontalMobile');
    }
  } else {
    isMobile = false;
    document.body.classList.remove('isMobile', 'isHorizontalMobile');
  }
};

window.addEventListener('resize', checkIsMobile);
export const getIsMobile = (): boolean => isMobile;
export default checkIsMobile;
