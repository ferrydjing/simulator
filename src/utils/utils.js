const formatNum = num => {
  if (+num > 10000) {
    return (+num / 10000).toFixed(2) + "w";
  } else {
    return num;
  }
};

export { formatNum };
