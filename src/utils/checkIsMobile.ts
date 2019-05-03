const MOBILE_SIDE = 550;

export default () => {
  const { clientHeight, clientWidth } = window.document.body;
  if (Math.min(clientHeight, clientWidth) <= MOBILE_SIDE) {
    document.body.classList.add('isMobile');
  }
};
