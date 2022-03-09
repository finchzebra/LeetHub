/**
 * @param {number} numRows
 * @return {number[][]}
 */
var nextRow = function(arr) {
    var newArr = [1];
    for (var i = 1; i <= arr.length; i++) {
        if (i === arr.length) {
            newArr.push(1);
        } else {
            newArr.push(arr[i - 1] + arr[i]);
        }
    }
    return newArr;
}

var generate = function(numRows) {
    var rows = [[1]];
    for (var i = 2; i <= numRows; i++) {
        rows.push(nextRow(rows[i - 2])); 
    }
    return rows;
};