/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    var arr = [0, 1];
    for (var i = 2; i <= n; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr[n];
};