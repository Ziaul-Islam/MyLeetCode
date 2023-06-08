/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b)=> a - b);
    const temp = money - prices[0] - prices[1];
    return temp >= 0? temp : money;
};