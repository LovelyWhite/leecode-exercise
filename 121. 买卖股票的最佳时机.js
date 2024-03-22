/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    }
    profit = Math.max(prices[i] - minPrice, profit);
  }
  console.log(profit);
  return profit;
};
maxProfit([7, 6, 4, 3, 1]);
