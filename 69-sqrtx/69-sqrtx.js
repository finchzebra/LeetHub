/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
        for (var i = 0; true; i++) {
        if (i * i <= x && (i + 1) * (i + 1) > x) return i;
    }
};