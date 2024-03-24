/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let i = 0;
  while (true) {
    if (Math.abs(i - x / i) < 0.00001) {
      return i;
    }
    if (i - x / i > 0) {
      return i - 1;
    }
    i++;
  }
};

/**
 * 牛顿迭代法
 * Xn+1 = Xn - F(Xn)/F'(Xn)
 * 令 F(x) = x^2 - C
 * 可得：Xn+1 = Xn - Xn^2 - C / 2Xn
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x == 0) {
    return 0;
  }
  let x0 = x;
  let xn;
  do {
    xn = x0 - (x0 * x0 - x) / (2 * x0);
    if (Math.abs(x0 - xn) < 10e-6) {
      return Math.floor(x0);
    }
    x0 = xn;
  } while (true);
};

console.log(mySqrt(0));
debugger;
