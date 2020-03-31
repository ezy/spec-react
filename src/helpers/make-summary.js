export const makeSummary = (truncator, num, useWordBoundary) => {
  if (truncator && truncator.length <= num) {
    return truncator;
  }
  const subString = truncator ? truncator.substr(0, num - 1) : '';
  return `${
    useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(' '))
      : subString
  }...`;
};
