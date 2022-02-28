/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
        if (!needle) return 0;
    for (var i = 0; i <= haystack.length - needle.length; i++) {
        var allMatched = true;
        for (var j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                allMatched = false;
            }
        }
        if (allMatched) return i;
    }
    return -1;
};