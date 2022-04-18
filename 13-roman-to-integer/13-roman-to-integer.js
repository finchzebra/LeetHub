/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var runningTotal;
    if (arguments[1]) {
        runningTotal = arguments[1];
    } else {
        runningTotal = 0;
    }
    if (!s) return runningTotal;
    if (s[s.length - 1] === "I") {
        runningTotal++;
        return romanToInt(s.slice(0, s.length - 1), runningTotal);
    }
    if (s[s.length - 1] === 'V' && s[s.length - 2] === 'I') {
        runningTotal += 4;
        return romanToInt(s.slice(0, s.length - 2), runningTotal);
    }
    if (s[s.length - 1] === 'V') {
        runningTotal += 5;
        return romanToInt(s.slice(0, s.length - 1), runningTotal);
    }
    if (s[s.length - 1] === 'X' && s[s.length - 2] === 'I') {
        runningTotal += 9;
        return romanToInt(s.slice(0, s.length - 2), runningTotal);
    }
    if (s[s.length - 1] === 'X') {
        runningTotal += 10;
        return romanToInt(s.slice(0, s.length - 1), runningTotal);
    }
    if (s[s.length - 1] === 'L' && s[s.length - 2] === 'X') {
        runningTotal += 40;
        return romanToInt(s.slice(0, s.length - 2), runningTotal);
    }
    if (s[s.length - 1] === 'L') {
        runningTotal += 50;
        return romanToInt(s.slice(0, s.length - 1), runningTotal);
    }
    if (s[s.length - 1] === 'C' && s[s.length - 2] === 'X') {
        runningTotal += 90;
        return romanToInt(s.slice(0, s.length - 2), runningTotal);
    }
    if (s[s.length - 1] === 'C') {
        runningTotal += 100;
        return romanToInt(s.slice(0, s.length - 1), runningTotal);
    }
    if (s[s.length - 1] === 'D' && s[s.length - 2] === 'C') {
        runningTotal += 400;
        return romanToInt(s.slice(0, s.length - 2), runningTotal);
    }
    if (s[s.length - 1] === 'D') {
        runningTotal += 500;
        return romanToInt(s.slice(0, s.length - 1), runningTotal);
    }
    if (s[s.length - 1] === 'M' && s[s.length - 2] === 'C') {
        runningTotal += 900;
        return romanToInt(s.slice(0, s.length - 2), runningTotal);
    }
    if (s[s.length - 1] === 'M') {
        runningTotal += 1000;
        return romanToInt(s.slice(0, s.length - 1), runningTotal);
    }
};