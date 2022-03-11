/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var bestProfit = 0;
    var bottom = prices[0];
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < bottom) bottom = prices[i];
        if (prices[i] - bottom > bestProfit) bestProfit = prices[i] - bottom;
    }
    return bestProfit;
};