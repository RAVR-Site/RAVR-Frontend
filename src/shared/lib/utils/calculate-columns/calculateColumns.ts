export const calculateColumns = (screenWidth: number) => {
  const baseWidth = 608;
  const step = 132;
  const baseColumns = 5;

  if (screenWidth < baseWidth) return baseColumns - 1;

  return Math.floor((screenWidth - baseWidth - 2) / step) + baseColumns;
}