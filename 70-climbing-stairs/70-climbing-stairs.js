/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1;
    var steps = [1, 1];
    for (var i = 2; i  <= n; i++) {
        steps[i] = steps[i - 2] + steps[i - 1];
    }
    return steps[n];
};