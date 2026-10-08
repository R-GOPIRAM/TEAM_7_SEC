"use strict";
function isPalindrome(str) {
    const cleaned = str.toLowerCase();
    let r = cleaned.length - 1;
    let l = 0;
    while (l < r) {
        if (cleaned.charAt(r) != cleaned.charAt(l)) {
            return str + ` is not a Palindrome`;
        }
        l++;
        r--;
    }
    return str + ` is Palindrome`;
}
console.log(isPalindrome("helleh"));
console.log(isPalindrome("Madam"));
