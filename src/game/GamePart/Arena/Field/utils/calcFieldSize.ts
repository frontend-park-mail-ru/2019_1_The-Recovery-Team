export default (
  windowW: number,
  windowH: number,
  colCount: number,
  rowCount
): {
  width: number;
  height: number;
} => {
  const realW = windowW - 280;
  const realH = windowH - 280;

  const ratio = Math.min(realW / colCount, realH / rowCount);
  return {
    width: ratio * colCount,
    height: ratio * rowCount,
  };
};
