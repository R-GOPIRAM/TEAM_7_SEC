"use strict";
function reverseWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}
let input = "hello world java";
console.log(reverseWords(input));
