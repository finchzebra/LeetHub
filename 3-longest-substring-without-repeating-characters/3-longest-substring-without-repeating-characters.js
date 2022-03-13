/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var currentRecord = 0;
    for (var i = 0; i < s.length; i++) {
        var letterCounter = {};
        var streak = 0;
        for (var j = i; j < s.length; j++) {
            if (!letterCounter[s[j]]) {
                streak++;
                letterCounter[s[j]] = true;
                if (streak > currentRecord) currentRecord = streak;
            } else {
                break;
            }
        }
    }
    return currentRecord;
};