export default (f: Function, ms: number) => {
  let timer: any = null;

  return (...args) => {
    const onComplete = () => {
      f(...args);
      timer = null;
    };

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(onComplete, ms);
  };
};
