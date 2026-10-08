"use strict";
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
let n = 5;
console.log(factorial(n));
