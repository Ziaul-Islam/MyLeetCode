/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let res = [];
    intervals.sort((a, b) => a[0] - b[0]);
    let first = intervals[0][0];
    let second = intervals[0][1];
    for(let i = 1; i < intervals.length; i++){
        if(second >= intervals[i][0]){
            if(second < intervals[i][1])
            second = intervals[i][1];
        }
        else{
            res.push([first, second]);
            first = intervals[i][0];
            second = intervals[i][1];
        }
    }
    res.push([first, second]);
    return res;
};