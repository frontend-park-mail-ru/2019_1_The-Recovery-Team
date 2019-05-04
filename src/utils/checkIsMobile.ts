const MOBILE_SIDE = 550;

let isMobile: boolean = false;

export default () => {
  const { clientHeight, clientWidth } = window.document.body;
  if (Math.min(clientHeight, clientWidth) <= MOBILE_SIDE) {
    isMobile = true;
    document.body.classList.add('isMobile');
  }
};

export const getIsMobile = (): boolean => isMobile;
