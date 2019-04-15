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
    !window.location.host.startsWith('localhost')
  ) {
    window.addEventListener('load', registerFunc);
  }
};
