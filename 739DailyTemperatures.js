/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let answer = new Array(temperatures.length).fill(0);
    let stack = [];
    for(let i = 0; i < temperatures.length; i++){
        while(stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]){
            answer[stack[stack.length - 1]] = i - stack[stack.length - 1];
            stack.pop();
        }
        stack.push(i);
    }
    return answer;
};