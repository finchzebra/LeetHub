/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // base case
    if (!s) return true;
    // next level base
    for (var i = 0; i < s.length - 1; i++) {
        if (s[i] === '(' && s[i + 1] === ')' || 
            s[i] === '{' && s[i + 1] === '}' ||
            s[i] === '[' && s[i + 1] === ']') {
            return isValid(s.slice(0, i) + s.slice(i + 2));
            }
    }
    return false;
};