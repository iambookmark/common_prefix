module.exports.find = (array) => {
  if (!array[0] || array.length == 1) {
    return array[0] || "";
  }

  let i = 0;
  while (array[0][i] && array.every(x => x[i] == array[0][i])) {
    i++;
  }

  return array[0].substr(0, i);
}