/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/ /g,'');
    const regex = /[^A-Za-z0-9]/g;
    s = s.replace(regex, "");
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== s[(s.length - 1) - i]) return false;
    }
    return true;   
};