const classNames = (styles) => (...classNames) =>
  classNames
      .reduce((classStr, curClassName) => {
        return classStr + ' ' + styles[curClassName];
      }, 0
      );

export default classNames;
