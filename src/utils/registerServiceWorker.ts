const registerFunc = async () => {
  try {
    const registration = await navigator.serviceWorker.register(
      '/service-worker.js'
    );
    console.info('SW registered: ', registration);
  } catch (e) {
    console.info('SW registration failed: ', e);
  }
};

export default () => {
  if (
    'serviceWorker' in navigator &&
    window.location.host.includes('sadislands.ru')
  ) {
    window.addEventListener('load', registerFunc);
  }
};
