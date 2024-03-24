/**
 * 贪心算法，有涨就做一次买卖
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0;
  }
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    let price = prices[i + 1] - prices[i];
    if (price > 0) {
      profit += price;
    }
  }
  return profit;
};
