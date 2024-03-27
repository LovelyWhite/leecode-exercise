/**
 * @param {number} num
 * @return {string}
 */
var map = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
  4: "IV",
  9: "IX",
  40: "XL",
  90: "XC",
  400: "CD",
  900: "CM",
};
let arr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
var intToRoman = function (num) {
  let curIndex = arr.length - 1;
  let roman = "";
  while (num > 0) {
    let count = Math.floor(num / arr[curIndex]);
    while (count--) {
      roman += map[arr[curIndex]];
    }
    num = num % arr[curIndex];
    curIndex--;
  }
  return roman;
};

console.log(intToRoman(3999));
