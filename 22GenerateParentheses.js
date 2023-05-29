/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var stack = [];
    var res = [];
    var backTracking = function(openN, closeN){
        if(openN === closeN && closeN === n){
            res.push(stack.join(""));
            return;
        }
        if(openN < n){
            stack.push('(');
            backTracking(openN + 1, closeN);
            stack.pop();
        }
        if(closeN < openN){
            stack.push(')');
            backTracking(openN, closeN + 1);
            stack.pop();
        }
    }
    backTracking(0,0);
    return res;
};