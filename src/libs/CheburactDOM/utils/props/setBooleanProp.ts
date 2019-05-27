export default ($target: HTMLElement, name: string, value: boolean) => {
  if (value) {
    $target.setAttribute(name, 'true');
    $target[name] = true;
  } else {
    $target.removeAttribute(name);
  }
};
