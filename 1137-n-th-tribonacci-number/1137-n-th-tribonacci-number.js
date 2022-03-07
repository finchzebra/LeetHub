/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;
    var arr = [0, 1, 1];
    for (var i = 3; i <= n; i++) {
        arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
    }
    return arr[n];
};