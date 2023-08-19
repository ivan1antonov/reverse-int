module.exports = function reverse (n) {
  let temp = String(Math.abs(n));
  let res = '';
  for (let i = temp.length-1; i >= 0; i--){
    res = res + temp[i];
  }
  return res;
};
