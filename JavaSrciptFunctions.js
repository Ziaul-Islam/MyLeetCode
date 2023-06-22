console.log("Hello World");
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));

let sum1 = function (a, b) {
    return a + b;
}
console.log(sum1(2, 3));

let sum2 = (a, b) => {
    return a + b;
}
console.log(sum2(2, 3));

console.log((function (a, b) {
    return a + b;
})(2, 3));

let sum3 = new Function(
    'a',
    'b',
    'return a + b'
);

console.log(sum3(2, 3));