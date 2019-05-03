export default (
  windowW: number,
  windowH: number,
  colCount: number,
  rowCount
): {
  width: number;
  height: number;
} => {
  const realW = windowW - 100;
  const realH = windowH - 100;

  const ratio = Math.min(realW / colCount, realH / rowCount);
  return {
    width: ratio * colCount,
    height: ratio * rowCount,
  };
};
