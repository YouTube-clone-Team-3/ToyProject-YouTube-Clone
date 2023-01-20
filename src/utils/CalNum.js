const calcNum = (num) => {
  if (num >= 0 && num < 1000) {
    return num;
  } else if (num >= 1000 && num < 10000) {
    return `${(num / 1000).toFixed(1)}천`;
  } else if (num < 100000) {
    return `${(num / 10000).toFixed(1)}만`;
  } else if (num < 100000000) {
    return `${Math.floor(num / 10000)}만`;
  } else if (num < 1000000000) {
    return `${(num / 100000000).toFixed(1)}억`;
  } else {
    return `${Math.floor(num / 100000000)}억`;
  }
};

export default calcNum;
