const classNames = styles => (...classNames) =>
  classNames
    .reduce(
      (classStr, cur) =>
        typeof cur !== 'string' || typeof styles[cur] !== 'string'
          ? classStr
          : `${classStr} ${styles[cur]}`,
      ''
    )
    .trim();
export default classNames;
